const PORT= process.env.PORT 
const http = require('http')
const {getProducts,getProduct,createProduct} = require('./controllers/productControllers')
 
const server = http.createServer((req,res)=> {
    const condition = ''
    if (req.url === '/api/products' && req.method==='GET'){
       getProducts(req,res);
    }else if(req.url.match(/\/api\/products\/([0-9]+)/)  && req.method==='GET') {
        const id = req.url.split('/')[3]
        getProduct(req,res,id);
    } else if(req.url==='POST' && req.url==='/api/products'){
        createProduct(req,res)
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