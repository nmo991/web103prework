import { useState } from 'react';
import { supabase } from '../client';

function AddCreator() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImg] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await supabase.from('creators').insert({
      name,
      url,
      description,
      imageURL
    });
    
    window.location = '/';
  };
  
  return (
    <div className="container">
      <h2>Add New Creator</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          placeholder="Channel URL" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <textarea 
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input 
          placeholder="Image URL"
          value={imageURL}
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;