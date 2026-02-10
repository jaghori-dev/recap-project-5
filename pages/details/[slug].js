import { useRouter } from "next/router";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";
import Card from "@/components/Card/Card";
import LinkButton from "@/components/LinkButton";

export default function Details({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <Loading/>;
  }

  const artPiece = artPieces.find((art) => art.slug === slug);

  if (!artPiece) {
    return <NotFound/>;
  }

  return (
    <>
      <Card artist={artPiece.artist}
               imageName={artPiece.name}
               imageYear={artPiece.year}
               imageGenre={artPiece.genre}
               imageSource={artPiece.imageSource} />
      <LinkButton
        text="Back to Gallery"
        link="/gallery"/>
      </>
  );
}
