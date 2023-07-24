var hostname="Localhost"
var port=3000;
const http = require('http');
const fs = require('fs');
const server= http.createServer((req,res)=>{
    const jsondata = fs.readFileSync("api.json", "utf-8");
    const obj=JSON.parse(jsondata);
    if(req.url=='/'){
        // console.log(res.end('server is running in Index Page'));
        res.end('server is running in Index Page');
    }
    else if(req.url=='/downloads'){
        // console.log(res.end("server is running On Downloads Page"));
        res.end("server is running On Downloads Page");
    }
    else if(req.url=='/about'){
        // console.log(res.end("server is running On About Page"));
        res.end(obj[0].name);
    }
    else{
        res.end("404: Page could not be found");
    }
    // res.end("Sever on");
});
server.listen(`${port}`,()=>{
    console.log(`server create on port no. ${port}`);
});