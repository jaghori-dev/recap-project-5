import styled from "styled-components";
import LinkButton from "@/components/Buttons/LinkButton";

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <NotFoundIcon>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </NotFoundIcon>
      <NotFoundTitle>Art piece not found</NotFoundTitle>
      <NotFoundText>
        The artwork does not exist or has been removed.<br/>
        <LinkButton
          text="Back to Gallery"
          link="/gallery"/>
      </NotFoundText>
    </NotFoundWrapper>
  );
}

const NotFoundWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  color: #64748b;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NotFoundIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`;

const NotFoundTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem;
`;

const NotFoundText = styled.p`
  font-size: 1rem;
  max-width: 400px;
  line-height: 1.6;
`;
