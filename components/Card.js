import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Card({ artist, imageName, imageYear= "", imageGenre="", imageSource, slug, isGallery = false }) {
  return (
    <Section>
      <ArtCard>
        <ArtCardImageWrapper href={`/details/${slug}`}>
          <ArtCardImage
            src={`${imageSource}`}
            height={200}
            width={200}
            alt={imageName} />
        </ArtCardImageWrapper>
        <ArtCardBody>
          <ArtCardTitle >
            <Link href={`/details/${slug}`}>
              {imageName}
            </Link>
          </ArtCardTitle>
          <ArtCardItem>
            <ArtCardLabel>Artist:</ArtCardLabel>
            <ArtCardValue>{artist}</ArtCardValue>
           </ArtCardItem>
          {!isGallery && (
            <>
            <ArtCardItem>
              <ArtCardLabel>Year:</ArtCardLabel>
              <ArtCardValue>{imageYear}</ArtCardValue>
            </ArtCardItem>
            <ArtCardItem>
              <ArtCardLabel>Genre:</ArtCardLabel>
              <ArtCardValue>{imageGenre}</ArtCardValue>
            </ArtCardItem>
            </>)}
        </ArtCardBody>
      </ArtCard>
    </Section>
  );
}


const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 380px));
  gap: 2rem;
  justify-content: center;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem 0.5rem;
  }
`;

const ArtCard = styled.div`
  background: var(--bg-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  max-width: 380px;
  width: 100%;
  height: 350px;  
  display: flex;
  flex-direction: column;
  transition: var(--btn-transition);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

    @media (max-width: 768px) {
      max-width: 100%;
    }
`;

const ArtCardBody = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-content: space-between;
`;

const ArtCardTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
  text-align: center;
  
  a {
    display: block;  
    color: #1e293b;  
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.3;
    text-decoration: none;
  
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    
    &:hover {
      color: #3b82f6;  
      text-decoration: underline;
      transform: translateX(4px); 
      transition: all 0.2s ease;
    }
  }
  
  @media (max-width: 768px) {
    a {
      font-size: 1.1rem;
    }
  }
`;

const ArtCardItem = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 0.25rem 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

const ArtCardImageWrapper = styled(Link)`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  display: block; 
  
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02); 
  }
`;

const ArtCardImage = styled(Image)`
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  transition: transform 0.4s ease;
  
  ${ArtCardImageWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const ArtCardLabel = styled.span`
  font-weight: 600;
  color: #64748b;
  font-size: 0.95rem;
`;

const ArtCardValue = styled.span`
  font-weight: 500;
  color: #1e293b;
  text-align: right;
  font-size: 1rem;
`;