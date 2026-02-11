import { useRouter } from "next/router";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";
import Card from "@/components/Card/Card";
import LinkButton from "@/components/LinkButton";
import CommentInput from "@/components/CommentInput";
import Container from "@/components/CommentContainer";
import styled from "styled-components";
// import CommentsWraper from "@/components/CommentsWraper";

export default function Details({ artPieces, handleFormValue, comments }) {
  const router = useRouter();

  function onFormChange(event) {
    event.preventDefault();
    const newComment = event.target.comment.value;
    handleFormValue(artPiece.slug, newComment);
  }
  const { slug } = router.query;
  if (!slug) {
    return <Loading />;
  }

  const artPiece = artPieces.find((artPiece) => artPiece.slug === slug);

  if (!artPiece) {
    return <NotFound />;
  }
  const filteredComments = comments.filter(
    (comment) => comment.slug === artPiece.slug
  );
  return (
    <>
      <Card
        artist={artPiece.artist}
        imageName={artPiece.name}
        imageYear={artPiece.year}
        imageGenre={artPiece.genre}
        imageSource={artPiece.imageSource}
      />
      <LinkButton text="Back to Gallery" link="/gallery" />
      <CommentInput onSubmit={onFormChange} />
      <Container>
        <ul>
          {filteredComments.map((comment) => {
            return (
              <li key={comment.slug}>
                <CommentsWraper>
                  <p className="artPiece-description">{comment.comment}</p>
                  <Date>{comment.date}</Date>
                </CommentsWraper>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}

const CommentsWraper = styled.div`
  background: var(--bg-secondary);
  border-radius: 12px;
  min-height:40px;
  margin-top: 5px;
  padding: 5px;
  box-shadow: var(--shadow);
  border: solid 1px ;
  position: relative;
`;
const Date = styled.small`
position: absolute;
right: 4px;
bottom: 0;
`