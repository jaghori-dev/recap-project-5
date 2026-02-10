import styled from "styled-components";

export default function Error() {
  return (
    <ErrorWrapper>
      <ErrorText>Failed to Load</ErrorText>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ErrorText = styled.p`
  color: #64748b;
  font-size: 1rem;
  max-width: 400px;
  line-height: 1.6;
`;