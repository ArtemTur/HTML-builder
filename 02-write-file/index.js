const fs = require('fs');
const path = require("path");
const { stdin, stdout } = process;

stdout.write('Привет!\n');
stdout.write('Введите текст\n');
fs.writeFile(path.join('02-write-file', 'file.txt'), '', (err) => {
  if (err) throw err;
}
);
stdin.on('data', data => fs.appendFile(path.join('02-write-file', 'file.txt'), data, (err) => {
  if (err) throw err;
}));
process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));
process.on('SIGINT', () => process.exit());