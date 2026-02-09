import Image from "next/image";
import Link from "next/link";

export default function CardDetails({ artPiece }) {
  // const artElem = artPieces[0];

  return (
    <section className="spotlight-container">
      <div className="art-card">
        <div className="art-image-wrapper">
          <Image
            src={`${artPiece.imageSource}`}
            height={200}
            width={200}
            alt={artPiece.name}
          />
        </div>
        <div className="art-card-body">
          <h2 className="art-title">{artPiece.name}</h2>
          <p className="art-description">Artist: {artPiece.artist}</p>
          <p className="art-description">Year: {artPiece.year}</p>
          <p className="art-description">Genre: {artPiece.genre}</p>

          <Link href="/gallery">
            back to gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
