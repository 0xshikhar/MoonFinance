import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@biconomy/web3-auth/dist/src/style.css"
import MainLayout from "../layout/mainLayout";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}