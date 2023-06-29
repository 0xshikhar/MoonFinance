import "../styles/globals.css";
import "@biconomy/web3-auth/dist/src/style.css"
import MainLayout from "../layout/mainLayout";
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, moonbeam, moonbaseAlpha } from '@wagmi/chains'

import { ThemeProvider } from 'styled-components';
import { blackTheme, GlobalStyle } from '../design/themes';
const queryClient = new QueryClient();


const { chains, provider } = configureChains(
  [moonbeam, moonbaseAlpha],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }), publicProvider()]
);


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={blackTheme}>

      <QueryClientProvider client={queryClient}>
        <GlobalStyle />

        {/* biconomy wallet is implemented MainLayout Navbar - 
      imported wallet.tsx component  */}
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}