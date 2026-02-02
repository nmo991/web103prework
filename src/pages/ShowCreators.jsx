import { useState, useEffect } from 'react';
import { supabase } from '../client'; 
import CreatorCard from '../components/CreatorCard';
import AddCreator from './AddCreator';
import {Link} from 'react-router-dom';

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCreators = async () => {
      setIsLoading(true);
      const { data } = await supabase.from('creators').select('*');
      setCreators(data || []);
      setIsLoading(false); 
    };
    getCreators();
  }, []);

  if (isLoading) {
    return <div className="container"><p>Loading creators...</p></div>;
  }

  if (creators.length === 0) {
    return (
      <div className="container">
        <h1>Creatorverse</h1>
        <p>No creators yet. Be the first to add one!</p>
        <Link to="/new" role="button" className="primary">
          <button>Add Creator</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Creatorverse</h1>
      <Link to="/new" role="button" className="primary">
        <button>Add Creator</button>
      </Link>
      <div className="grid">
        {creators.map(creator => (
          <CreatorCard key={creator.name} creator={creator} />
        ))}
      </div>
    </div>

  );
}

export default ShowCreators;
