import * as fs from 'fs';
import * as path from 'path';

// Specify the directory of the audio files
const audioDirectory = 'audio2';

// List of files to be renamed
const totalFiles = 48;

// Indices of the removed questions (1-based index)
const removedIndices = [2, 11, 13, 21, 22, 30, 34, 35, 36, 43, 44];

// Function to check if an index is in the removedIndices list
const isRemoved = (index: number): boolean => {
    return removedIndices.includes(index);
};

// Remove files corresponding to the removed questions
removedIndices.forEach(index => {
    const filePath = path.join(audioDirectory, `${index}.mp3`);
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file ${index}.mp3: `, err);
        } else {
            console.log(`Deleted file ${index}.mp3`);
        }
    });
});

// // Renaming remaining files
// let newIndex = 1;
// for (let i = 1; i <= totalFiles; i++) {
//     if (!isRemoved(i)) {
//         const oldFilePath = path.join(audioDirectory, `${i}.mp3`);
//         const newFilePath = path.join(audioDirectory, `temp_${newIndex}.mp3`);

//         // Check if the old file exists before renaming
//         if (fs.existsSync(oldFilePath)) {
//             fs.rename(oldFilePath, newFilePath, (err) => {
//                 if (err) {
//                     console.error(`Error renaming file ${i}.mp3 to temp_${newIndex}.mp3: `, err);
//                 } else {
//                     console.log(`Renamed file ${i}.mp3 to temp_${newIndex}.mp3`);
//                 }
//             });
//         }
//         newIndex++;
//     }
// }

// // Final renaming from temp to final names
// for (let i = 1; i < newIndex; i++) {
//     const tempFilePath = path.join(audioDirectory, `temp_${i}.mp3`);
//     const finalFilePath = path.join(audioDirectory, `${i}.mp3`);

//     fs.rename(tempFilePath, finalFilePath, (err) => {
//         if (err) {
//             console.error(`Error renaming file temp_${i}.mp3 to ${i}.mp3: `, err);
//         } else {
//             console.log(`Renamed file temp_${i}.mp3 to ${i}.mp3`);
//         }
//     });
// }
