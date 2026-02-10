import Card from "@/components/Card/Card";

export default function Gallery({ artPieces }) {
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
          />
        );
      })}
    </section>
  );
}
