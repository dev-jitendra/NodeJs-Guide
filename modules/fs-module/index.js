// non-blocking io model
const fs = require('fs');
fs.writeFile('file.txt','Data is Added to file\n Hello World',()=>{
    console.log("Success"); 
});

const b= fs.writeFileSync('file2.txt',"SEcond file");
console.log(b);
console.log("Hello JS");

fs.readFile('file.txt',"utf-8",(err,data)=>{
    console.log(data);
    // console.log(err);
})


fs.readFile("fil3e.txt", "utf-8", (err, data) => {
  // console.log(data);
  console.log(err);
});

fs.appendFile('file2.txt','external data added success!!!',(err,data)=>{
    console.log(err,data);
});

fs.rename("hello.mjs", "file.txt", (err) => {
  console.log(err);
});

fs.unlinkSync('hello.mjs',(err)=>{
    console.log(err);
});