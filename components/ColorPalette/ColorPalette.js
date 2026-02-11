import styled from "styled-components";

export default function ColorPalette({ colors = [] }) {
  if (!colors.length) {
    return <PaletteContainer>Keine Farben verfügbar.</PaletteContainer>;
  }
console.log("farben", colors);
  return (
    <PaletteContainer>
      <ColorsGrid>
        {colors.slice(0, 8).map((col, index) => (
          <Colors key={index} color={col} title={col} />
        ))}
      </ColorsGrid>
    </PaletteContainer>
  );
}

// Styles bleiben gleich wie zuvor
const PaletteContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
`;


const ColorsGrid = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 500px;
  margin: 0 auto;
`;

const Colors = styled.span`
  --color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  background-color: var(--color);
  border-radius: 50%;
  display: block;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: all 0.25s ease;
  border: 3px solid rgba(255,255,255,0.8);

  &:hover {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 8px 25px rgba(0,0,0,0.25);
  }
`;
