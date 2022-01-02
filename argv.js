// Method1

// Node.js program to demonstrate the use of process.argv

// Importing the process module
const process = require('process');

// Printing property value for process.argv
console.log(process.argv);
// Method 2

// Node.js program to demonstrate the use of process.argv

// Importing the process module
const process = require('process');

// Printing process.argv property value
var args = process.argv;

console.log("Total number of arguments are: " + args.length);
args.forEach((val, index) => {
    console.log(`${index}: ${val}`);
});