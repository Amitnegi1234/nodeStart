const onSubmitHandler=(e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    const product=formData.get('productName')
    const obj={
        "productName":product
    }
    axios.post('http://localhost:3000'+"/api/products",obj).then((result)=>{
        console.log(result.data.value);
    })
}