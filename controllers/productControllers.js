const Product = require('../models/productModels')

const {getPOSTData} = require('../utils.js')
// get ALL Products by /api/products
async function getProducts(req,res) {
    try {
        const products = await Product.findAll() 

        res.writeHead(200,{'content-type':'application/json'});
        res.write(JSON.stringify(products));
        res.end()
    } catch (error) {
        console.log(error)
    }
}

// get single product by /api/product/:id
async function getProduct(req,res,number){
    
    try {
    const product = await Product.findSpecific(number)

        if (!product){  
            res.writeHead(404,{'content-type':'application/json'});
            res.write(JSON.stringify({message : 'not found'}));
            res.end()    
        }else{
        res.writeHead(200,{'content-type':'application/json'});
        res.write(JSON.stringify(product));
        res.end()
        }
        
    } catch (error) {
        console.log(error)
    }
}
//create a product

async function createProduct(req,res) {
    try {
        
        const body = await getPOSTData(req)

        const {title,description,price} = JSON.parse(body);
        const product ={title,description,price}

        const newProduct =  await Product.create(product);

        res.writeHead(201,{'content-type': 'application/json'});
        res.end(JSON.stringify(newProduct));


        

    } catch (error) {
        console.log(error)
    }
}

//updateProduct
async function updateProduct(req,res,id) {
    try {
        const product = await Product.findSpecific(id)


        if (!product){  
            res.writeHead(404,{'content-type':'application/json'});
            res.write(JSON.stringify({message : 'not found'}));
            res.end()    
        }else{
            const body =await getPOSTData(req)
            const {title,description,price} = JSON.parse(body);
            const productData ={title: title || product.title,
                description: description || product.description,
                price: price || product.price}

            const updProduct =  await Product.update(id, productData);

            res.writeHead(200,{'content-type': 'application/json'});
            res.end(JSON.stringify(updProduct));
        }
      

    } catch (error) {
        console.log(error)
    }
}


async function deleteProduct(req,res,number){
    
    try {
    const product = await Product.findSpecific(number)

        if (!product){  
            res.writeHead(404,{'content-type':'application/json'});
            res.write(JSON.stringify({message : 'not found'}));
            res.end()    
        }else{
        res.writeHead(200,{'content-type':'application/json'});
        res.write(JSON.stringify(product));
        res.end()
        }
        
    } catch (error) {
        console.log(error)
    }
}



module.exports ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}