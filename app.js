const express=require('express');
const orderRouter=require('./route/orders')
const userRouter=require('./route/users')
const app=express()
app.use(express.json())

app.use('/orders',orderRouter)
app.use('/users',userRouter)

const port=3000
app.listen(port,()=>{
    console.log(`Server is running`);
})