import Link from "next/link";
import styled from "styled-components";

export default function LinkButton({text, link}){
  return (
    <StyledLinkButton href={link}>
      {text}
    </StyledLinkButton>
  );
}

const StyledLinkButton = styled(Link)`
  display: block;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 1rem auto 0;
  padding: 0.875rem 2rem;  
  background: linear-gradient(135deg, #6366f1, #8b5cf6);  
  color: white;  
  text-decoration: none;
  border: none;  
  border-radius: 0.75rem;  
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4); 
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  

  &:hover {
    background: linear-gradient(135deg, #5856eb, #7c3aed);
    transform: translateY(-2px);  
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;