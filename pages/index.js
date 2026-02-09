import Card from "@/components/Card";
import useSWR from "swr";
import Image from "next/image";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function HomePage() {
  const { data, error, isLoading, isValidating } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);

  return (
    <>
      {data.map((item) => {
        return (
          <Card key={item.slug} title={item.artist} description={item.name}>
            <Image
              src={`${item.imageSource}`}
              height={100}
              width={100}
              alt={item.name}
            />
          </Card>
        );
      })}
    </>
  );
}
