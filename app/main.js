const fs = require('fs');
const path = require('path');


const command = process.argv[2];

switch (command) {
  case 'init':
    createGitDirectory();
    break;
  default:
    console.log('Unknown command');
    break;
}

 function createGitDirectory() {
    fs.mkdirSync(path.join(process.cwd(), '.git'), { recursive: true });
    fs.mkdirSync(path.join(process.cwd(), '.git', 'objects'), { recursive: true });
    fs.mkdirSync(path.join(process.cwd(), '.git', 'refs'), { recursive: true });
    fs.writeFileSync(path.join(process.cwd(), '.git', 'HEAD'), 'ref: refs/heads/main\n');

    console.log('Initialized git repository');

 }