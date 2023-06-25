import "../styles/globals.css";
import "@biconomy/web3-auth/dist/src/style.css"
import MainLayout from "../layout/mainLayout";


export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}