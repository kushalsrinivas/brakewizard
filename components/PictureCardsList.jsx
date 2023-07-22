import React from "react";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import {BsShare} from 'react-icons/bs'
import Link from "next/link";
import { saveAs } from "file-saver";
import {AiOutlineDownload,AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
const PictureCardsList = (props)=>{
  const getIMG = (id)=>{
    const selected = data.filter((img ,index)=> img.id === id)
    return selected;
  }
  const handleDownload = (id)=>{
    const data = getIMG(id)[0]
    fetch(`../images/${data.url}`)
      .then((response) => response.blob())
      .then((blob) => {
        // Use file-saver to save the blob as a file with a custom filename
        saveAs(blob, `${data.url}`); // Customize the downloaded filename here
      })
      .catch((error) => {
        console.error('Error downloading the image:', error);
        // Add error handling here if necessary
      });
  }
    const {data} = props;
    console.log(data);
    if(!data){
      return <div>loading....</div>
    }
    return <>
    <Header/>
    <div className="flex flex-col p-5 ">

    {data.map((img,index)=>{ 

      try{
    
      return <div className="main-container my-4 content-center snap-center self-center" key={img.id} >

      <Image 
      className="card rounded-md"
        src= {require(`../images/${img.url}`)}
        alt="lol"
        width={300}
        placeholder="blur"
      />
      <div className="flex flex-row justify-center space-x-14 bg-slate-500 py-3 my-1 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <button className="btn rounded-sm font-sans    px-2 py-1"><AiOutlineHeart/> </button>
      
        <button onClick={()=>{
          handleDownload(img.id);
        }} className="btn rounded-sm font-sans   px-2 py-1 ">
        <AiOutlineDownload/>
         </button>

        <button className="btn rounded-sm font-sans    px-2 py-1 "><BsShare/> </button>

      </div>
      </div>
     } catch{
      return <h1>not availbenael</h1>
     }
      }
     )}
    </div> 
    <Footer/>
     </>
}
export default PictureCardsList;

