import GlobalStyle from "../styles";
import Header from "@/components/Header/Header";
import useSWR from "swr";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import styled from "styled-components";
import { initComments } from "@/components/initComment";
// import { useLocalStorage } from "usehooks-ts";
import useLocalStorageState from "use-local-storage-state";

const fetcher = async (url) => {
  const response = await fetch(url);
  return await response.json();
};
export default function App({ Component, pageProps }) {
  const [comments, setComments] = useLocalStorageState("comments", {defaultValue:[]});
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: {},
  });

  const {
    data: artPieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <Error />;
  if (isLoading) return <Loading />;
    function toggleFavorites(slug) {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [slug]: !prevFavorites[slug],
    }));
  }
  function handleFormValue(slug, newComment) {
    if(newComment === ''){
      return
    }
    console.log(newComment);
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
  



  if (error) return <Error />;
  if (isLoading) return <Loading />;

    setComments((prevComments) => [
      { comment: newComment, date, slug, isFavorite: false },
      ...prevComments,
    ]);
  }
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Component
          {...pageProps}
          artPieces={artPieces}
          comments={comments}
          handleFormValue={handleFormValue}
          favorites={favorites}
          toggleFavorites={toggleFavorites}
        />
      </Main>
    </>
  );
}

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;
