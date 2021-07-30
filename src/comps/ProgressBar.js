import React,{useEffect} from 'react';
import useStorage from '../Hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({file,setFile})=>{
 const {percentage,url} = useStorage(file);
 useEffect(()=>{
     if(url){
        setFile(null);
     }
 },[url]);
 return (
     (file && <motion.div className="progress-bar"
        initial={{width:0}}
        animate={{width:percentage + '%'}}
     ></motion.div>)
 )
}
export default ProgressBar;