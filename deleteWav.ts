import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * Delete all .wav files in a directory
 * @param dirPath The directory path
 */
async function deleteWavFiles(dirPath: string): Promise<void> {
  try {
    const files: string[] = await fs.readdir(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = await fs.stat(filePath);

      if (stat.isFile() && path.extname(file) === '.wav') {
        await fs.remove(filePath);
        console.log(`Deleted file: ${filePath}`);
      }
    }
  } catch (err) {
    console.error(`Error reading or deleting files in directory: ${dirPath}`, err);
  }
}

// Usage example:
const directoryPath = path.resolve(__dirname + "/audio"); // Current directory

deleteWavFiles(directoryPath)
  .then(() => console.log('Deletion completed successfully!'))
  .catch((err) => console.error('Error during deletion:', err));
