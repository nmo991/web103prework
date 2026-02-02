import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .filter('id', 'eq', id)
        .single();
      
      if (data) {
        setCreator(data);
      }
    };
    
    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator(prev => ({
      ...prev,
      [name]: value
    }));
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await supabase
      .from('creators')
      .update(creator)
      .eq('id', id);
    
    navigate('/');
  };

  const handleDelete = async () => {
    <div>
      <p>Are you sure you want to delete this creator?</p>
      <button></button>
    </div>
    await supabase
      .from('creators')
      .delete()
      .eq('id', id);
    
    navigate('/');
  };

  return (
    <div className="container">
      <nav>
        <ul>
          <li><strong>Creatorverse</strong></li>
        </ul>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      
      <h1>Edit Creator</h1>
      
      <form>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={creator.name}
            onChange={handleChange}
            placeholder="Creator name"
            required
          />
        </label>
        
        <label htmlFor="url">
          Channel URL. Please make sure to use "https://..."
          <input
            type="url"
            id="url"
            name="url"
            value={creator.url}
            onChange={handleChange}
            placeholder="https://example.com"
            required
          />
        </label>
        
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            value={creator.description}
            onChange={handleChange}
            placeholder="Describe the creator..."
            rows="3"
            required
          />
        </label>
        
        <label htmlFor="imageURL">
          Image URL (Optional). Please make sure to use "https://..."
          <input
            type="url"
            id="imageURL"
            name="imageURL"
            value={creator.imageURL}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </label>
        
        <div className="grid">
          <button type="submit" className="primary" onClick={handleSubmit}>Submit</button>
          <button type="button" className="secondary" onClick={handleDelete}>Delete Creator</button>
          <Link to="/" role="button" className="contrast">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default EditCreator;