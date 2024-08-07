import * as fs from 'fs';
import * as path from 'path';
import csvParser from 'csv-parser'; // Change to default import
import * as csvWriter from 'csv-writer';

const inputDir = './SD Campuran'; // The directory containing the CSV files
const outputFile = 'combined-SD Campuran.csv';

interface Record {
  [key: string]: string;
}

async function getCsvFiles(directory: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        return reject(err);
      }
      const csvFiles = files.filter((file) => path.extname(file) === '.csv');
      resolve(csvFiles.map((file) => path.join(directory, file)));
    });
  });
}

async function combineCsvFiles(inputDir: string, outputFile: string) {
  const inputFiles = await getCsvFiles(inputDir);
  const allRecords: Record[] = [];
  let header: string[] = [];

  for (const inputFile of inputFiles) {
    await new Promise<void>((resolve, reject) => {
      const records: Record[] = [];
      fs.createReadStream(path.resolve(inputFile))
        .pipe(csvParser())
        .on('headers', (headers: string[]) => {
          if (header.length === 0) {
            header = headers;
          }
        })
        .on('data', (data: Record) => {
          if (Object.values(data).some((value) => value.trim() !== '')) {
            records.push(data);
          }
        })
        .on('end', () => {
          allRecords.push(...records);
          resolve();
        })
        .on('error', (error: Error) => reject(error));
    });
  }

  if (header.length === 0) {
    throw new Error('No header found in input files');
  }

  const csvWriterInstance = csvWriter.createObjectCsvWriter({
    path: outputFile,
    header: header.map((h: string) => ({ id: h, title: h }))
  });

  await csvWriterInstance.writeRecords(allRecords);
  console.log(`Combined CSV file created: ${outputFile}`);
}

combineCsvFiles(inputDir, outputFile).catch((error) => {
  console.error('Error combining CSV files:', error);
});
