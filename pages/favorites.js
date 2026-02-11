import ArtGallery from "@/components/Gallery/ArtGallery";
export default function FavoritesPage({
  favorites,
  artPieces,
  toggleFavorites,
}) {
  const trueKeys = Object.keys(favorites).filter((key) => favorites[key]);
  //   console.log('truekeys',trueKeys)
  const favoriteArtPieces = artPieces.filter((artPiece) =>
    trueKeys.includes(artPiece.slug)
  );
  console.log(favoriteArtPieces);

  return (
    <ArtGallery
      artPieces={favoriteArtPieces}
      favorites={favorites}
      toggleFavorites={toggleFavorites}
    />
  );
}
