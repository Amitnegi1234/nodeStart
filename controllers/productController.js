const path=require('path')

const getProducts=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','view','product.html'))
}
const getProductById=(req,res)=>{
    const id=req.params.id;
    res.send(`fetching product with id ${id}`)
}
const postProduct=(req,res)=>{
    // res.send('new product addded')
    const data=req.body;
    console.log(data);
    res.json({value:data.product})
}
const editProduct=(req,res)=>{
    res.send('put request called')
}
const deleteProduct=(req,res)=>{
    res.send('delete request called')
}

module.exports={getProducts,getProductById,postProduct,editProduct,deleteProduct}