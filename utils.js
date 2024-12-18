const fs=require('fs')

function writeDataToFile(filename,content){
    fs.writeFileSync(filename,JSON.stringify(content),'utf8',(err)=>{
        if (err){
            console.log(err)
        }
    })
}

function getPOSTData(req){
    return new Promise((resolve,reject)=>{
        try {
            let body = ''

            req.on('data',(chunk)=>{
                body+= chunk.toString()
            })
            req.on('end',()=>{
                resolve(body)
            })
        } catch (error) {
            console.log(error)
            
        }
    })
}

module.exports={
    writeDataToFile,
    getPOSTData
}