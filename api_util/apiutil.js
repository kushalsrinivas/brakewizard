import {storage} from  '../firebase/firebase';
import {ref , uploadBytes, listAll , getDownloadURL} from 'firebase/storage';
import { useState } from 'react';
import { v4 } from "uuid";



export async function  GetImages () { 
    var urlList = []
    const ImageFolderRef = ref(storage, 'images/')

   await listAll(ImageFolderRef).then((res)=>{
        res.items.forEach((item) => {
            getDownloadURL(item).then((url)=>{
                urlList.push(url);
            })
        })
    })
    return urlList;
} 