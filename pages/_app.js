import GlobalStyle from "../styles";
import Header from "@/components/Header";
import "../components/Header.css";
import useSWR from "swr";


const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
export default function App({ Component, pageProps }) {
    const { data: artPieces, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Header/>
      <main className="app-main">
        <Component {...pageProps}
        artPieces={artPieces}
        />
      </main>
    </>
  );
}
