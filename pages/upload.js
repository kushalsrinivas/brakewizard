import { useEffect, useState } from "react"
import { storage } from "@/firebase/firebase";
import {ref , uploadBytes, listAll , getDownloadURL} from 'firebase/storage';
import { v4 } from "uuid";
import Image from "next/image";
export default function Upload(){

    const [ImageUpload, setImageUplaod] = useState(null);
    const [isLoading , setLoading] = useState(false)

        const onUpload = (e)=>{
            setLoading(true)
        e.preventDefault();
        if (ImageUpload === null) {
            return 
        }
            const ImageRef = ref(storage  , `images/${ImageUpload.name + v4()}`)
            uploadBytes(ImageRef,ImageUpload).then(()=>{
                alert(`${ImageUpload.name} is uploaded`)
            })

    }


    return (<>
    <h1 className="flex p-8 items-center justify-center  text-2xl m-3 font-extrabold">just choose and upload</h1>
    <div className="container flex items-center justify-center h-screen  ">

        <form  className="flex flex-col bg-black" onSubmit={onUpload}>
            <input
            onChange={(e)=>{
                setImageUplaod(e.target.files[0])
            }}
             className="p-8 rounded-lg shadow-lg hover:cursor-auto hover:cursor-pointer" 
             type='file' 
             >
            </input>
            <button
             className="p-8 border rounded-md text-2xl m-3 font-extrabold hover:cursor-auto" >UPLOAD </button>
        </form>
    </div>
    <div>
        {isLoading && <div className="container flex items-center justify-center h-screen p-10  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
            loading
        </div>}
    </div>
    </>)
}
