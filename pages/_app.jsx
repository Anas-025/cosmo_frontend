import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { MeContextProvider } from "../context/me";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App(props) {
  const { Component, pageProps } = props;

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Cosmo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MeContextProvider>
          {getLayout(<Component {...pageProps} />)}
        </MeContextProvider>
      </QueryClientProvider>
    </>
  );
}
