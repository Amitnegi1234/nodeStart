const http=require('http');
const fs=require('fs')
const server=http.createServer((req,res)=>{
    // console.log("server is created")
    const url=req.url;
    const method=req.method;
    if(req.url==='/'){
        res.setHeader('Content-type','text/html');
        res.end(
            `
                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="username"/>
                    <button type="submit">Add</button>
                </form>
            `
        )
    }else{
        if(req.url==="/message"){
            res.setHeader('Content-type','text/html');
            let body=[]
            req.on('data',(chunks)=>{
                console.log(chunks)
                body.push(chunks)
            })
            req.on('end',()=>{
                let combinedBuffer=Buffer.concat(body);
                console.log(combinedBuffer.toString());
                let formValue=combinedBuffer.toString().split("=")[1];
                console.log(formValue);
                fs.writeFile("formValue.txt",formValue,(err)=>{
                    res.statusCode=302;
                    res.setHeader('Location','/');
                    res.end()
                })
            })
        }else{
            if(req.url==='/read'){
                fs.readFile("formValue.txt",(err,data)=>{
                    console.log(data.toString());
                    res.end(
                        `
                            <h1>${data.toString()}</h1>
                        `
                    )
                })
            }
        }
    }
})

const port=3000
server.listen(port,()=>{
    console.log("server is running");
})