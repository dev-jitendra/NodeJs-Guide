const path = require('path');
const a = path.basename("C:\\path\\dir\\file.txt");
const b = path.dirname("C:\\path\\dir\\file.txt");
const c = path.extname("C:\\path\\dir\\file.txt");
console.log(`basename()= ${a}`);
console.log(`dirname()= ${b}`);
console.log(`extname()= ${c}`);