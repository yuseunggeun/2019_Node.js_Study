const fs=require('fs');
const calc=require('./opr');
const add=calc.add;
const subtract=calc.subtract;
const multiply=calc.multiply;
const divide=calc.divide;

fs.readFile('input.txt',(err,content)=>{
    if (err) 
        throw err;
    const data = content.toString().split(',');
    
    if(data[1]=='+'){
        fs.writeFile('output.txt',add(Number(data[0]),Number(data[2])),(err)=>{
            if (err)
                throw err;
        })
    }
    else if(data[1]=='-'){
        fs.writeFile('output.txt',subtract(Number(data[0]),Number(data[2])),(err)=>{
            if (err)
                throw err;
        })
    }
    else if(data[1]=='*'){
        fs.writeFile('output.txt',multiply(Number(data[0]),Number(data[2])),(err)=>{
            if (err)
                throw err;
        })
    }
    else if(data[1]=='/'){
        fs.writeFile('output.txt',divide(Number(data[0]),Number(data[2])),(err)=>{
            if (err)
                throw err;
        })
    }
});