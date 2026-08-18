const getProducts=(req,res)=>{
    res.send('fetching all products')
}
const getProductById=(req,res)=>{
    const id=req.params.id;
    res.send(`fetching product with id ${id}`)
}
const postProduct=(req,res)=>{
    res.send('new product addded')
}
const editProduct=(req,res)=>{
    res.send('put request called')
}
const deleteProduct=(req,res)=>{
    res.send('delete request called')
}

module.exports={getProducts,getProductById,postProduct,editProduct,deleteProduct}