const products = require('../data/data.json')
const { v4:uuidv4 } =require('uuid')

const {writeDataToFile} = require('../utils.js')

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


function create(product){
    return new Promise((resolve,reject)=>{
        const newProduct= {id:uuidv4(),...product} //... is for spread each element in the new object
        products.push(newProduct)
        writeDataToFile('./data/data.json',products)
        resolve(newProduct)
    })
}



module.exports ={
    findAll,
    findSpecific,
    create
}

