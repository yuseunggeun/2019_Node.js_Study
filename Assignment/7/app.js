const express=require('express');
const app=express();
const session=require('express-session');
const bodyParser=require('body-parser')

let users = [{id : 'example', password : 'example', major : 'example', name : 'example'}];

app.use(express.static(__dirname+'/static'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}));


app.get('/', (req, res) => {
    res.redirect('/signup.html')
});

app.post('/signup',(req,res)=>{
    let id = req.body.userId;
    let password = req.body.password;
    let major = req.body.usermajor;
    let name = req.body.username;
    for(let i = 0;i<users.length;i++){
        if(users[i].id == id){
            res.send('User already exists');
            break;
        }
        if(i == users.length - 1){
            users.push({id : id, password : password, major : major, name : name});
            res.redirect('/login.html');
            break;
        }
    }
});

app.post('/login',(req,res)=>{
    let tempid = req.body.userId;
    let temppassword = req.body.password;
    for(let i = 0;i<users.length;i++){
        if(users[i].id == tempid){
            if(users[i].password == temppassword){
                req.session.userId = tempid;
                res.redirect('/profile');
                break;
            }
            else{
                res.send('Password wrong');
                break;
            }
        }
        if(i == users.length - 1){
            res.send('ID wrong');
            break;
        }
    }
});

app.get('/profile', (req, res) => {
    if(!req.session.userId){
        res.send('No session!');
    }
    else{
        for(let i = 0;i<users.length;i++){
            if(users[i].id == req.session.userId){
                res.send('major : '+users[i].major+' name : '+users[i].name);
                break;
            }
        }
    }
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
});