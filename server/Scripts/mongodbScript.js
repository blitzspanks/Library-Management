const getCurrentDate= require('./getCurrentDate');
console.log(getCurrentDate());
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Run the `getDate.js` script to get the date
const getDateProcess = spawn('node', ['getCurrentDate.js'], { stdio: 'pipe' });

getDateProcess.stdout.on('data', (data) => {
  const inputDate = data.toString().trim();
  const baseDirectory = path.join('C:\\Users\\Vaibhav\\Desktop\\Omkar\\Web Development\\Library Management System\\server\\data', inputDate);

  // Create the full path to the data directory
  const dataDirectory = path.join(baseDirectory, 'data'); // Add 'data' to the path

  // Create the data directory if it doesn't exist
  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory, { recursive: true });
    console.log(`Created data directory: ${dataDirectory}`);
  } else {
    console.log(`Data directory already exists: ${dataDirectory}`);
  }

  // Start MongoDB with the specified data directory
  const mongodbCommand = `mongod --dbpath ${dataDirectory}`;
  console.log(`Starting MongoDB with command: ${mongodbCommand}`);

  // You can now execute the `mongodbCommand` to start MongoDB with the specified data directory.
  // Note that you may need to adjust the MongoDB command based on your system's configuration.
  // For example, if MongoDB is not in your system's PATH, provide the full path to the MongoDB executable.
});
