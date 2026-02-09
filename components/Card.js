import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Card({ title, description, imageSource, slug }) {
  const router = useRouter();
  return (
    <div className="art-card">
      <div className="art-image-wrapper">
        <Image src={`${imageSource}`} height={200} width={200} alt={name} />
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
