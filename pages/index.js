import { useEffect, useState } from "react";
import Image from "next/image";
import path from 'path';
import fs from 'fs/promises';
import PictureCardsList from "@/components/PictureCardsList";

const  Home = (props)=>{
  const [name, setName] = useState()
  const {data} = props;

  useEffect(()=>{
    fetch('api/imageList')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

  }
    ,[])


  return(<>
 <div>
<PictureCardsList data = {data} > </PictureCardsList>
 </div> 
  </>)
}
export default Home;



export async function getStaticProps(context){
  const pathtofile = path.join(process.cwd(),'store', 'data.json');
  const data  = await fs.readFile(pathtofile)
  const jsonData  =   JSON.parse(data);
  return {
    props:{
      data : jsonData
    },
    revalidate :10
  }

}
