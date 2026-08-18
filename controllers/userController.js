const getUsers=(req,res)=>{
    res.send('fetching all users')
}
const addUser=(req,res)=>{
    res.send('adding a new user')
}
const getUserById=(req,res)=>{
    const id=req.params.id;
    res.send(`fetching user of id ${id}`)
}
module.exports={getUsers,addUser,getUserById}