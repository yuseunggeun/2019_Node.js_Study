const express=require('express');
const fs=require('fs');
const app=express();
let counter = 0;

app.get('/',(req,res)=>{
    fs.readFile('./counterMain.html',(err,data)=>{
        if (err)
            throw err;
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
});

app.post('/increase',(req,res)=>{
    counter += 1;
    res.redirect('/');
});

app.post('/decrease',(req,res)=>{
    counter -= 1;
    res.redirect('/');
});

app.get('/show',(req,res)=>{
    res.send(String(counter));
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
});