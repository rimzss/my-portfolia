import "../styles/globals.css";
import Nav from "./components/nav";
import Cursor from "./components/cursor";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
