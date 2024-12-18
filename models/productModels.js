const products = require('../data/data.json')

function findAll(){
    return new Promise((resolve,reject)=> {
        resolve(products)
    })
}

function findSpecific(number){
    return new Promise((resolve,reject)=>{
        const product = products.find((p)=>p.id === number)
        resolve(product)
    })
}

module.exports ={
    findAll,
    findSpecific
}

