import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams(); 
  const [creator, setCreator] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCreator = async () => {
      setIsLoading(true);
      
      const { data } = await supabase
        .from('creators')
        .select('*')
        .filter('id', 'eq', id)
        .single();
      
      setCreator(data);
      setIsLoading(false); 
    };
    
    getCreator();
  }, [id]);

  if (isLoading) {
    return <div className="container"><p>Loading creator...</p></div>;
  }

  if (!creator) {
    return <div className="container"><p>Creator not found.</p></div>;
  }
  
  return (
    <div className="container">
      <h1>{creator.name}</h1>
      {creator.imageURL && (
        <img 
          src={creator.imageURL} 
          alt={creator.name}
          style={{ maxWidth: '300px', borderRadius: '8px' }}
        />
      )}
      <p><strong>Description:</strong> {creator.description}</p>
      <p>
        <strong>Channel: </strong>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">
          {creator.url}
        </a>
      </p>
      <Link to={`/${creator.id}/edit`} role="button" className="secondary">
        Edit Creator
      </Link>
    </div>
  );
}

export default ViewCreator;