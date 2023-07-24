var hostname="Localhost"
var port=3000;
const http = require('http');
const server= http.createServer((req,res)=>{
    if(req.url=='/'){
        // console.log(res.end('server is running in Index Page'));
        res.end('server is running in Index Page');
    }
    else if(req.url=='/downloads'){
        // console.log(res.end("server is running On Downloads Page"));
        res.end("server is running On Downloads Page");
    }
    else{
        res.end("404: Page could not be found");
    }
    // res.end("Sever on");
});
server.listen(`${port}`,()=>{
    console.log(`server create on port no. ${port}`);
});