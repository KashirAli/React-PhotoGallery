import React,{useState} from 'react';
import Title from './comps/Title';
import ImageForm from './comps/ImageForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
function App() {
  const [fileName,setFileName] = useState('');
  const [selectedimg,setSelectedimg] = useState(null)
  return (
    <div className="App">
      <Title/>
      <ImageForm getFileValue={(e)=>(setFileName(e))}/>
      <ImageGrid setSelectedimg={setSelectedimg} file={fileName}/>
      {selectedimg && <Modal selectedimg={selectedimg} setSelectedimg={setSelectedimg} /> }
    </div>
  );
}

export default App;
