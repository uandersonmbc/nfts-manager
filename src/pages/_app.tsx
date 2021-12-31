import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log("routeChangeStart");
    });

    router.events.on("routeChangeComplete", () => {
      console.log("routeChangeComplete");
    });

    return () => {
      router.events.off("routeChangeStart", () => {});
      router.events.off("routeChangeComplete", () => {});
    };
  }, [router]);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
