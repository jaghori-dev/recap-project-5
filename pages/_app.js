import GlobalStyle from "../styles";
import Header from "@/components/Header";
import "../components/Header.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <main className="app-main">
        <Component {...pageProps} />
      </main>
    </>
  );
}
