import Card from "@/components/Card/Card";

export default function Homepage({ artPieces }) {
  const randomZahl = Math.floor(Math.random() * artPieces.length);
  const art = artPieces[randomZahl];

  return (
    <Card
        key={art.slug}
        artist={art.artist}
        imageName={art.name}
        imageSource={art.imageSource}
        slug={art.slug}
        isDetails={false}
      />
  );
}
