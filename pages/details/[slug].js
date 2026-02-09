import CardDetails from "@/components/CardDetails";
import { useRouter } from "next/router";

export default function Details({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return <p>Loading...</p>;
  }

  const artPiece = artPieces.find((art) => art.slug === slug);

  if (!artPiece) {
    return <p>Art piece not found</p>;
  }

  return <CardDetails artPiece={artPiece} />;
}
