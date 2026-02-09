import Image from "next/image";

export default function Card({ title, description, imageSource }) {
  return (
    <div className="art-card">
      <div className="art-image-wrapper">
        <Image
          src={`${imageSource}`}
          height={200}
          width={200}
          alt={name}
        />
      </div>
      <div className="art-card-body">
        <h2 className="art-title">{title}</h2>
        <p className="art-description">{description}</p>
      </div>
    </div>
  );
}