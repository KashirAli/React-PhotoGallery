import React,{useEffect} from 'react';
import useFireStore from '../Hooks/useFireStore';
import { motion } from 'framer-motion';
const ImageGrid = ({file,setSelectedimg})=>{
    const {doc} = useFireStore('images',file);
  

    return(<div className="img-grid">
        {doc && doc.map((curr)=><motion.div className="img-wrap"
          layout
          whileHover={{ opacity: 1 }}>
            <motion.img src={curr.url} key={curr.id} alt="image" onClick={()=>setSelectedimg(curr.url)}
                initial={{opacity:0}}
                animate={{opacity:1}}                
            />
            </motion.div>)}
    </div>)
}

export default ImageGrid;