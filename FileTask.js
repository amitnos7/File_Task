const fs = require("fs");
const path = require("path");

// Define the directory path containing the input files
const dirPath = path.join(__dirname, "/OutputFolder");

// Initialize an empty string to hold the merged content
let mergedContent = "";

// Iterate through 10 files
for (let i = 1; i <= 10; i++) {
  
    // Read the content of the current file
    const filePath = path.join(dirPath, `${i}.txt`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Split the content into lines
    const lines = fileContent.split("\r\n");

    // Extract the required number of lines (i lines from file i)
    const selectedLines = lines.slice(0, i);

    // Add the selected lines to the merged content
    mergedContent += selectedLines.join("\r\n") + "\n";

    console.log(
      `Extracted ${selectedLines.length} lines from file ${i}:`,
      selectedLines
    );
 
}

// Prints the output
const outputFilePath = path.join(dirPath, "output.txt");
fs.writeFileSync(outputFilePath, mergedContent);

console.log(`Merged content written to ${outputFilePath}.`);
