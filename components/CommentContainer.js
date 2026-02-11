import styled from "styled-components";
export default function CommentsContainer({ children }) {
  return <Container>{children}</Container>;
}
const Container = styled.div`
  margin: auto;
  padding: 10px;
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  max-width: 380px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: var(--btn-transition);
`;
