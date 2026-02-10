import Card from "@/components/Card/Card";
import { useState, useEffect } from "react";

export default function Homepage({ artPieces, favorites, toggleIsFavorite }) {
  const [art, setArt] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    setArt(artPieces[randomIndex]);
  }, [artPieces]);

  if (!art) return <p>Loading...</p>;

  return (
    <section className="spotlight-container">
      <Card
        key={art.slug}
        title={art.artist}
        description={art.name}
        imageSource={art.imageSource}
        slug={art.slug}
        isFavorite={favorites[art.slug]}
        onClick={() => toggleIsFavorite(art.slug)}
      />
    </section>
  );
}
