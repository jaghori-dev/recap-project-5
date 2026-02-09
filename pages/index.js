import Header from "@/components/Header";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Header/>
      <div>
        <Image src="/images/mona-lisa.jpg" height={100} width={100} alt="Mona Lisa" />
      </div>
    </>
  );
}
