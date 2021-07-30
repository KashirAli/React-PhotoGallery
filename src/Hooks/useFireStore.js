import React,{useState,useEffect} from 'react';
import { projectFirestore } from '../Firebase/firebase';
import useStorage, {url} from './useStorage';
const useFireStore = (collection,file)=>{
    const [doc,setDoc] = useState([]);
    
    useEffect(() => {
        const document = [];
       const unsub =  projectFirestore.collection(collection).
       orderBy('createdAt','desc').
       onSnapshot((snap)=>{
            snap.forEach((doc)=>
                document.push({...doc.data(),id:doc.id})
            )
            setDoc(document);
        })
        console.log('useEffect called','useFireStore')
         return () => unsub();
    },[collection,file])
    return {doc};
}
export default useFireStore;