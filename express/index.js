const express =  require('express');
// console.log(express);
const app=express();
app.get('/',(req,res)=>{
    res.send('Hi this is First express rout')
});
app.get('/about',(req,res)=>{
    res.send('Hi this is First express rout on about')
});
app.listen(3120,(console.log('server is running')));
