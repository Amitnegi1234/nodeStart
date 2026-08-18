const getCart=(req,res)=>{
    const id=req.params.id;
    res.send(`fetching cart for user with id : ${id}`)
}
const addCart=(req,res)=>{
    const id=req.params.id;
    res.send(`Adding product to cart for user with ID: ${id}`)
}
module.exports={getCart,addCart}