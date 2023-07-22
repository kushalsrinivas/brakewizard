// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { log } from 'console';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';



export default function handler(req, res) {
  
  function writeData (data){
    fs.writeFileSync(path.join(process.cwd(),'store','data.json'), JSON.stringify(data))
  }

  const imagesFolder = path.join(process.cwd(), '/images')

  var data = []
  fs.readdir(imagesFolder, (err, files) => {
    if(!err){
      res.status(200).json({ name : files})
      files.map((file)=>data.push({id :uuidv4(), url :file  ,date : new Date() , likes : 0 , downloads  : 0 }))
       writeData(data)
    }
    else{
      res.status(500).json({message : err})
    }

  })


 
}
