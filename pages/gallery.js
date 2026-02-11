import ArtGallery from "@/components/Gallery/ArtGallery";

export default function Gallery({ artPieces, favorites, toggleFavorites }) {
  return (
    <ArtGallery
      artPieces={artPieces}
      favorites={favorites}
      toggleFavorites={toggleFavorites}
    />
  );
}
