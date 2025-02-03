const DogCard = ({ dog, isFavorite, onToggleFavorite }) => {
    return (
      <div className="dog-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <img src={dog.img} alt={dog.name} style={{ maxWidth: '200px' }} />
        <h3>{dog.name}</h3>
        <p><strong>Breed:</strong> {dog.breed}</p>
        <p><strong>Age:</strong> {dog.age}</p>
        <p><strong>Zip Code:</strong> {dog.zip_code}</p>
        <button onClick={onToggleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    );
  };
  
  export default DogCard;
  