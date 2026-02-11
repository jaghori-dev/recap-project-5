import styled from "styled-components";

export default function CardComments({comments, artPiece}){
  const filteredComments = comments.filter(
    (comment) => comment.slug === artPiece.slug
  );

  return(
    <CommentsWrapper>
      {filteredComments.length > 0 ? (
        <CommentsList>
          {filteredComments.map((comment) => (
            <CommentItem key={comment.slug}>
              <CommentContent>{comment.comment}</CommentContent>
              <CommentDate>{comment.date}</CommentDate>
            </CommentItem>
          ))}
        </CommentsList>
      ) : (
        <NoComments>
          No comments yet. Be the first!
        </NoComments>
      )}
    </CommentsWrapper>
  );
}

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
`;

const CommentsList = styled.ul`
  display: flex;  
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;  
`;

const CommentItem = styled.li`
  background: #f8fafc;
  border-radius: 0.75rem;
  padding: 1.25rem 1.75rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  border-left: 3px solid #6366f1; 
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  width: 100%;
  max-width: 380px;

  &:hover {
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
    transform: translateY(-1px);
  }
`;

const CommentContent = styled.p`
  margin: 0 0 0.5rem 0;
  color: #1e293b;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
`;

const CommentDate = styled.span`
  display: block;
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 500;
`;

const NoComments = styled.p`
  color: #64748b;
  font-style: italic;
`;