let products = require('../data/data.json')
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

function update(number,updproduct){
    return new Promise((resolve,reject)=>{
        const index = products.findIndex((p)=> p.id=== number)
        const id = number
        products[index] = {id, ...updproduct}
        writeDataToFile('./data/data.json',products)
        resolve(products[index])
    })
}

function remove(number){
    return new Promise((resolve,reject)=>{
        products = products.filter((p)=> p.id !== number)
        writeDataToFile('./data/data.json',products)
        resolve()
    })
}


module.exports ={
    findAll,
    findSpecific,
    create,
    update,
    remove
}

