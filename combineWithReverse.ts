import * as fs from 'fs';
import * as path from 'path';
import csvParser from 'csv-parser';
import { createObjectCsvWriter } from 'csv-writer';

const inputDir = './csv-files'; // The directory containing the CSV files
const outputFile = 'reversed.csv';

// List of negative questions
const negativeQuestions = ['Q4', 'Q10', 'Q16', 'Q22', 'Q28', 'Q40', 'Q45']; // Add the negative questions here

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

function modifyHeader(header: string[]): string[] {
  return header.map(h => {
    if (h.match(/^Q\d+ L$/)) {
      return h.replace(' L', ' F');
    } else if (h.match(/^Q\d+ P$/)) {
      return h.replace(' P', ' M');
    }
    return h;
  });
}

function reverseValueIfNegative(question: string, value: string): string {
  const numericValue = parseInt(value, 10);
  if (negativeQuestions.includes(question) && !isNaN(numericValue)) {
    return (6 - numericValue).toString();
  }
  return value;
}

function modifyRecord(record: Record): Record {
  const newRecord: Record = {};
  for (const key in record) {
    if (key.match(/^Q\d+ L$/)) {
      const question = key.split(' ')[0];
      newRecord[key.replace(' L', ' F')] = reverseValueIfNegative(question, record[key]);
    } else if (key.match(/^Q\d+ P$/)) {
      const question = key.split(' ')[0];
      newRecord[key.replace(' P', ' M')] = reverseValueIfNegative(question, record[key]);
    } else {
      newRecord[key] = record[key];
    }
  }
  return newRecord;
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
            header = modifyHeader(headers);
          }
        })
        .on('data', (data: Record) => {
          if (Object.values(data).some((value) => value.trim() !== '')) {
            records.push(modifyRecord(data));
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

  const csvWriterInstance = createObjectCsvWriter({
    path: outputFile,
    header: header.map((h: string) => ({ id: h, title: h }))
  });

  await csvWriterInstance.writeRecords(allRecords);
  console.log(`Combined CSV file created: ${outputFile}`);
}

combineCsvFiles(inputDir, outputFile).catch((error) => {
  console.error('Error combining CSV files:', error);
});
