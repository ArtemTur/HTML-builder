const fs = require('fs');
const { type } = require('os');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      console.log(file.split('.').join('-'));
    })
  }
})

fs.stat(path.join(__dirname, 'secret-folder'), (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      console.log(stats);
    })
  }
})
