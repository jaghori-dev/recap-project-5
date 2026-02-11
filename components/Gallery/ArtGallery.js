
import styled from "styled-components";
import Card from "@/components/Card/Card";

export default function ArtGallery({artPieces}) {
  return (
    <Section>
      {artPieces.map((item) => (
        <Card
          key={item.slug}
          slug={item.slug}
          artist={item.artist}
          imageName={item.name}
          imageSource={item.imageSource}
          isDetails={false}
        />
      ))}
    </Section>
  )
}

const Section = styled.section`
  display: grid;
  place-items: center;
  min-height: 60vh;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;