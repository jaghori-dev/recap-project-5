import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Card({
  title,
  description,
  imageSource,
  slug,
  isFavorite,
  onClick,
}) {
  return (
    <div className="art-card">
      <span>
        <ImageStyling
          src={isFavorite ? "/heart-fill.png" : "/heart.png"}
          alt="favourite-icon"
          height={24}
          width={24}
          onClick={onClick}
        />
      </span>
      <div className="art-image-wrapper">
        <Image src={`${imageSource}`} height={200} width={200} alt={title} />
      </div>
      <div className="art-card-body">
        <h2 className="art-title">
          <Link href={`/details/${slug}`}>{description}</Link>
        </h2>
        <p className="art-description">Artist: {title}</p>
      </div>
    </div>
  );
}

const ImageStyling = styled(Image)`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #fff;
  border-radius: 10px;
  padding: 2px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
  z-index: 1;
  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
`;
