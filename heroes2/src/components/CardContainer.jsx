import Card from "./cardBox";
import { heroes } from "../constants/heroes";

function HeroesGallery () {
  return (
    <div className="gallery-page">
       <h1>Superheroes Gallery</h1>
       <div className="hero-cards">
        {heroes.map((hero, index) => (
          <Card
            key={index}
            hero={hero}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroesGallery;