import Card from "@/components/Card/Card";
import Loading from "@/components/Loading";
import { useState, useEffect } from "react";

export default function Homepage({ artPieces, favorites, toggleFavorites }) {
  const [art, setArt] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * artPieces.length);
    setArt(artPieces[randomIndex]);
  }, [artPieces]);

  if (!art) return <Loading />;

  return (
    <Card
      key={art.slug}
      artist={art.artist}
      imageName={art.name}
      imageSource={art.imageSource}
      slug={art.slug}
      isDetails={false}
      isFavorite={favorites[art.slug]}
      onClick={() => toggleFavorites(art.slug)}
    />
  );
}
