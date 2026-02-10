import Card from "@/components/Card/Card";
// import useLocalStorageState from "use-local-storage-state";

export default function Gallery({ artPieces, favorites, toggleIsFavorite }) {
  // const [favorites, setFavorites] = useLocalStorageState("favorites", {
  //   defaultValue: {},
  // });

  // function toggleIsFavorite(slug) {
  //   setFavorites((prevFavorites) => ({
  //     ...prevFavorites,
  //     [slug]: !prevFavorites[slug],
  //   }));
  // }

  return (
    <section className="gallery-grid">
      {artPieces.map((item) => {
        return (
          <Card
            key={item.slug}
            slug={item.slug}
            title={item.artist}
            description={item.name}
            imageSource={item.imageSource}
            isFavorite={favorites[item.slug]}
            onClick={() => toggleIsFavorite(item.slug)}
          />
        );
      })}
    </section>
  );
}
