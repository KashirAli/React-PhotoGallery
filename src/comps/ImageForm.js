import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
const ImageForm = (props)=>{
    const [file,setFile] = useState(null);
    const [error,setError] = useState('');
    const allowType = ['image/png','image/jpeg'];

    useEffect(()=>(props.getFileValue(file)),[file])
    const onChangeHandler = (e)=>{
        const selected = e.target.files[0];
        if(selected && allowType.includes(selected.type)){
            setFile(selected)
            setError('');
        }
        else{
            setFile(null);
            setError('Please select an image file(png or jpeg)');
        }
    }
    return(
        <form>
        <label>
        <input type="file" onChange={onChangeHandler}/>
            <span>
                    +
            </span>
        </label>
        {error &&  <div>
            <p className="error">{error}</p>
        </div> }
        {file && <ProgressBar file={file} setFile={setFile}/>}
        </form>
    );
}
export default ImageForm;
