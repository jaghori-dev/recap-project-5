import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styled from "styled-components";

export default function LikeButton({ initialLiked = false, onToggle }) {
  const [isLiked, setIsLiked] = useState(initialLiked);

  const toggleLike = () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    onToggle?.(newLiked);
  };

  return (
    <LikeButtonContainer>
      <StyledButton
        $isLiked = {isLiked}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          toggleLike();
        }}
        aria-label="Like">
          {isLiked ? <FaHeart /> : <FaRegHeart />}
      </StyledButton>
    </LikeButtonContainer>
  );
}

const LikeButtonContainer = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 10;
`;

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  svg {
    font-size: 1.2rem;
    transition: all 0.2s ease;

    ${props => props.$isLiked && `
      color: #ef4444 !important;
      filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.4));
    `}

    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.08) translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.98);
  }
`;