'use client';
import ArtGallery from '@/components/Gallery/ArtGallery';
import useLocalStorageState from "use-local-storage-state";
import styled, { keyframes } from 'styled-components';
import LinkButton from "@/components/Buttons/LinkButton";

export default function Favorites({artPieces}) {
  const [likedSlugs] = useLocalStorageState('liked-slugs', { defaultValue: [] });

  const likedArtPieces = artPieces?.filter(art => likedSlugs.includes(art.slug)) || [];

  return (
    <>
      {likedArtPieces.length > 0 ? (
        <ArtGallery artPieces={likedArtPieces} />
      ) : (
        <EmptyState>
          <EmptyIcon>♡</EmptyIcon>
          <EmptyTitle>No Favorites</EmptyTitle>
          <EmptyText>
            Like some artworks in the Gallery
            to see them here!
          </EmptyText>
          <LinkButton text="Back to Gallery" link="/gallery" />
        </EmptyState>
      )}
    </>
  );
}

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 2rem; 
  min-height: 50vh;
  color: #64748b;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const pulse = keyframes`
  0%, 100% { 
    opacity: 1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.7; 
    transform: scale(1.05); 
  }
`;

const EmptyIcon = styled.div`
  font-size: 8rem;     
  color: #cbd5e1;      
  margin-bottom: 2rem;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15));  

  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`;

const EmptyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
`;

const EmptyText = styled.p`
  font-size: 1.1rem;
  max-width: 400px;
  line-height: 1.6;
  margin: 0 0 2rem 0;
`;
