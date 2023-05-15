function Character({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <p><strong className="text-uppercase text-success h5">{character.status}</strong><br />
      {character.gender}<br />
      {character.species}
      </p>
    </div>
  );
}

export default Character;
