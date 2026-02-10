import Card from "@/components/Card";

export default function Homepage({ artPieces }) {
  const randomZahl = Math.floor(Math.random() * artPieces.length);
  const art = artPieces[randomZahl];

  return (
    <Card
        key={art.slug}
        title={art.artist}
        description={art.name}
        imageSource={art.imageSource}
        slug={art.slug}
      />
  );
}
