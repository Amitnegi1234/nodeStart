const express=require('express')
const router=express.Router();
const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

router.get('/',(req,res)=>{
    res.send(`Students : ${students.map(stu=>stu.name).join(', ')}`)
})
router.get('/:id',(req,res)=>{
    const id=Number(req.params.id);
    const student=students.find(stu=>stu.id===id);
    if(student){
        res.send(`student : ${student.name}`)
    }else{
        res.send("student not found")
    }
})
module.exports=router;