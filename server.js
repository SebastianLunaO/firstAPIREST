const PORT= process.env.PORT 
const http = require('http')
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('./controllers/productControllers')
 
const server = http.createServer((req,res)=> {
    const condition = ''
    if (req.url === '/api/products' && req.method==='GET'){
       getProducts(req,res);
    }else if(req.url.match(/\/api\/products\/([0-9]+)/)  && req.method==='GET') {
        const id = req.url.split('/')[3]
        getProduct(req,res,id);

    } else if(req.method==='POST' && req.url==='/api/products'){
        createProduct(req,res)
    }else if(req.url.match(/\/api\/products\/([0-9]+)/)  && req.method==='PUT') {
        const id = req.url.split('/')[3]
        updateProduct(req,res,id)

    }else if(req.url.match(/\/api\/products\/([0-9]+)/)  && req.method==='DELETE') {
        const id = req.url.split('/')[3]
        deleteProduct(req,res,id)

    }  
    else{
        res.writeHead(404,{'content-type':'application/json'});
        res.write(JSON.stringify('Request not Found'));
        res.end();
    }

   
})


server.listen(PORT,()=>{
    console.log(`Starting server at ${PORT}`);
})