const NetflixSeries = () => {
  const name = "Queen of Tears";
  const rating = "5.2";

  const genreCom = () => {
    const genre = "Romantic";
    return genre;
  };

  const summary = "This is my first summary";
  
  return (
    <div>
      <div>
        <img src="images/motivation.jpg" alt="motivation" style={{ width: "40%", height: "40%" }} />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Descriptions: {summary}</p>
      <p>Genre: {genreCom()}</p>
    </div>
  );
};

export default NetflixSeries;
