const express=require('express');
const userRoutes=require('./route/usersRoutes')
const productRoutes=require('./route/productRoutes')
const cartRoutes=require('./route/cartRoutes')
const app=express()
app.use(express.json())

app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes)
app.use('/api/cart',cartRoutes)

const port=3000
app.listen(port,()=>{
    console.log(`Server is running`);
})