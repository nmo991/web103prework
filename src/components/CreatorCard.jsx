import { Link } from 'react-router-dom';

function CreatorCard({creator}) {
  return (
    <article>
      <header>
        <Link to={`/${creator.id}`}>
          <h3>{creator.name}</h3>
        </Link>
      </header>

      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={`${creator.name}`}
          style={{ maxWidth: '150px', borderRadius: '8px' }}
        />
      )}

      <p>{creator.description}</p>

      <footer>
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          className="secondary"
        > 
        Visit Channel
        </a>
        <Link to={`/${creator.id}/edit`} role="button" className="outline">
          Edit
        </Link>
      </footer>
    </article>
  );
}

export default CreatorCard; 