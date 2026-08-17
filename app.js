const express=require('express');
const app=express()
app.use(express.json())

let users=[
    {id:1,name:"alice"},
    {id:2,name:"bob"}
];

app.get('/users',(req,res)=>{
    res.json(users)
})
app.get('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const user=users.find(u=>u.id==userId)
    if(!user){
        return res.status(404).json({message:'user not found'})
    }
    res.json(user)
})
app.post('/users',(req,res)=>{
    const {name}=req.body;
    const newUser={id:users.length+1,name};
    users.push(newUser);
    res.status(201).json(newUser)
})

const port=3000
app.listen(port,()=>{
    console.log(`Server is running`);
})