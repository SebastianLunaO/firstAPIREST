const Product = require('../models/productModels')


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
        const product ={
            title: 'Test Product',
            description: 'This is my product',
            price: 100
        }

        const newProduct = await Product.create(product);

        res.writeHead(201,{'content-type': 'application/json'});
        return res.end(JSON.stringify(newProduct));

    } catch (error) {
        console.log(error)
    }
}

module.exports ={
    getProducts,
    getProduct,
    createProduct
}