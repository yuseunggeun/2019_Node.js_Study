const fs=require('fs');
const calc=require('./opr');
const add=calc.add;
const subtract=calc.subtract;
const multiply=calc.multiply;
const divide=calc.divide;

let result;

fs.readFile('input.txt',(err,content)=>{
    if (err) 
        throw err;
    const data = content.toString().split(',');
    const data1 = Number(data[0]);
    const data2 = Number(data[2]);

    if(data[1]=='+'){
        result = add(data1,data2);
    }
    else if(data[1]=='-'){
        result = subtract(data1,data2);
    }
    else if(data[1]=='*'){
        result = multiply(data1,data2);
    }
    else if(data[1]=='/'){
        result = divide(data1,data2);
    }
    fs.writeFile('output.txt',result,(err)=>{
        if (err)
            throw err;
    })
});