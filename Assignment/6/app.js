const express=require('express');
const app=express();
const bodyParser=require('body-parser')

let users = [{id : 'example', password : 'example'}];

app.use(express.static(__dirname+'/static'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.redirect('html/signup.html')
});

app.post('/signup',(req,res)=>{
    let id = req.body.userId;
    let password = req.body.password;
    for(let i = 0;i<users.length;i++){
        if(users[i].id == id){
            res.send('User already exists');
            break;
        }
        if(i == users.length - 1){
            users.push({id : id, password : password});
            res.redirect('html/login.html');
        }
    }
});

app.post('/login',(req,res)=>{
    let tempid = req.body.userId;
    let temppassword = req.body.password;
    for(let i = 0;i<users.length;i++){
        if(users[i].id == tempid){
            if(users[i].password == temppassword){
                res.send("Welcome "+tempid+"!");
                break;
            }
            else{
                res.send('Password wrong');
                break;
            }
        }
        if(i == users.length - 1){
            res.send('ID wrong');
        }
    }
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
});