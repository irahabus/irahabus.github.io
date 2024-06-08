import * as fs from 'fs-extra';
import * as path from 'path';
import archiver from 'archiver';

/**
 * Recursively get all files in a directory
 * @param dirPath The directory path
 * @param arrayOfFiles The array to store file paths
 * @returns Array of file paths
 */
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files: string[] = fs.readdirSync(dirPath);

  files.forEach((file: string) => {
    const filePath: string = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Skip node_modules directory
      if (file !== 'node_modules') {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Zip the directory
 * @param sourceDir The source directory to zip
 * @param outPath The output zip file path
 */
async function zipDirectory(sourceDir: string, outPath: string): Promise<void> {
  const output = fs.createWriteStream(outPath);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
  });

  return new Promise((resolve, reject) => {
    output.on('close', () => {
      console.log(archive.pointer() + ' total bytes');
      console.log('Archiver has been finalized and the output file descriptor has closed.');
      resolve();
    });

    archive.on('warning', (err: any) => {
      if (err.code !== 'ENOENT') {
        reject(err);
      }
    });

    archive.on('error', (err: any) => {
      reject(err);
    });

    archive.pipe(output);

    const files: string[] = getAllFiles(sourceDir);
    files.forEach((file: string) => {
      const relativePath: string = path.relative(sourceDir, file);
      // Exclude the output zip file from being added to the archive
      if (relativePath !== path.basename(outPath) && !relativePath.startsWith('node_modules')) {
        archive.file(file, { name: relativePath });
      }
    });

    archive.finalize();
  });
}

// Usage example:
const sourceDir = path.resolve(__dirname); // Current directory
const outPath = path.join(__dirname, 'app.zip');

zipDirectory(sourceDir, outPath)
  .then(() => console.log('Zipping completed successfully!'))
  .catch((err) => console.error('Error during zipping:', err));
