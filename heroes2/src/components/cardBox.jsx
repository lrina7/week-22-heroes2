function Card ({hero}) {
  return (
    <div className="hero-card">
      <img src={hero.url} alt={hero.name} />
      <h2>{hero.name}</h2>
      <p>Alter Ego: {hero.alterego}</p>
      <p>Universe: {hero.universe}</p>
      <p>Occupation: {hero.occupation}</p>
      <p>Friends: {hero.friends}</p>
      <p>Superpowers: {hero.superpowers}</p>
      <p>{hero.info}</p>
      </div>
  );
}

export default Card;