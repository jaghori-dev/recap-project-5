import styled from "styled-components";

export default function CommentForm({comments, setComments, artPiece}) {
  function handleFormValue(event) {
    event.preventDefault();
    const newComment = event.target.comment.value;

    const now = new Date();
    const dateTime = now.toLocaleString("en-us", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    setComments(() => [
      {
        comment: newComment,
        date: dateTime,
        slug: artPiece.slug
      },
      ...comments,
    ]);

    event.target.reset();
  }

  return (
    <CommentCard>
      <form onSubmit={handleFormValue}>
        <CommentLabel htmlFor="comment">
          Comment:
        </CommentLabel>
        <CommentTextarea
          id = "comment"
          name = "comment"
          placeholder = "Enter your comment here..."
          rows = {4}
        />
        <SubmitButton type="submit">Send</SubmitButton>
      </form>
    </CommentCard>
  );
}

const CommentCard = styled.div`
  background: var(--bg-secondary, #ffffff);
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
  padding: 1.5rem 1.75rem;
  max-width: 380px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
    transform: translateY(-1px);
  }
`;

const CommentLabel = styled.label`
  display: block;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.25rem;
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;  /* 4 Zeilen ≈ 100px */
  padding: 0.75rem 0.9rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  color: #0f172a;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;  /* Nur Höhe anpassbar */
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
    background-color: #ffffff;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SubmitButton = styled.button`
  margin-left: auto;
  margin-top: 1rem;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  color: #ffffff;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.5);
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 36px rgba(99, 102, 241, 0.7);
    background: linear-gradient(135deg, #5856eb, #7c3aed);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 8px 20px rgba(79, 70, 229, 0.6);
  }
`;