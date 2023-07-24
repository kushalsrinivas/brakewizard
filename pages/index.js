import { useEffect, useState } from "react";
import { GetImages } from "@/api_util/apiutil";
import PictureCardsList from "@/components/PictureCardsList";
import {storage} from  '../firebase/firebase';
import {ref , uploadBytes, listAll , getDownloadURL} from 'firebase/storage';
import { v4 } from "uuid";


const  Home = (props)=>{
  const [data, setData]= useState([])
  useEffect(()=>{
    GetImages().then((urls)=> {
      setData(urls)

    })
  }, [])

  return(<>
 <div>
<PictureCardsList data = {data} > </PictureCardsList>
 </div> 
  </>)
}
export default Home;


