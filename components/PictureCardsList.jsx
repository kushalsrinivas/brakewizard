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

  }
    const {data} = props;

    if(!data){
      return <div className="main-container my-4 flex content-center snap-center self-center p-8">loading....</div>
    }
    return <>
    <Header/>
    <div className="flex flex-col p-5 ">

    {data.map((img,index)=>{ 

      try{
    
      return <div className="main-container my-4 content-center snap-center self-center" key={index} >

      <Image 
      className="card rounded-md"
      blurDataURL=""
      loader={({src})=>{
        return src
      }}
        src= {img}
        alt="lol"
        width={300}
        height={300}

      />

      <div className="flex flex-row justify-center space-x-14 bg-slate-500 py-3 my-1 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <button className="btn rounded-sm font-sans    px-2 py-1"><AiOutlineHeart/> </button>
      
        <button  className="btn rounded-sm font-sans   px-2 py-1 ">
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

