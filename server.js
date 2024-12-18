const PORT= process.env.PORT 
const http = require('http')
const products = require('./data/data.json')

const server = http.createServer((req,res)=> {
    if (req.url === '/api/products' && req.method==='GET'){
        res.writeHead(200,{'content-type':'application/json'});
        res.write(JSON.stringify(products));
        res.end()
    }else{
        res.writeHead(404,{'content-type':'application/json'});
        res.write(JSON.stringify('Request not Found'));
        res.end();
    }

   
})


server.listen(PORT,()=>{
    console.log(`Starting server at ${PORT}`);
})