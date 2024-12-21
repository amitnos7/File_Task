const fs = require("fs");
const path = require("path");

// Directory path
const dirPath = path.join(__dirname, "/OutputFolder");
let mergedContent = "";


for (let i = 1; i <= 10; i++) {
  
    const filePath = path.join(dirPath, `${i}.txt`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const lines = fileContent.split("\r\n");
    const selectedLines = lines.slice(0, i);

   
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
