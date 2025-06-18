import { useState } from "react";
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('bill', image);

    try {
      const res = await axios.post('http://localhost:8080/api/v1/split/extract', formData);
      console.log(res.data);
      
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-500 text-white flex justify-center items-center">
      <input type="file" accept="image/*" onChange={handleFileChange} className="border-black p-3 border-2"/>
      <button onClick={handleUpload} className="bg-black rounded-2xl p-3">Upload Bill</button>
    </div>
  )
}

export default App
