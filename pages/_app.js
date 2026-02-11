import { useRouter } from "next/router";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";
import Card from "@/components/Card/Card";
import LinkButton from "@/components/Buttons/LinkButton";
import CommentForm from "@/components/Comments/CommentForm";
import CardComments from "@/components/Comments/CardComments";
import useLocalStorageState from "use-local-storage-state";
import { comments as localComments } from "@/assets/comments";


export default function Details({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const [comments, setComments] = useLocalStorageState(
    "comments", {
      defaultValue: localComments,
    });

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

      <CommentForm
      comments = {comments}
      setComments = {setComments}
      artPiece = {artPiece}
      />

      <CardComments
        comments = {comments}
        artPiece = {artPiece}
      />

      <LinkButton
        text="Back to Gallery"
        link="/gallery"/>
    </>
  );
}
