import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Hero from "components/Hero/Hero";
import HeroList from "components/HeroList/HeroList";
import { useState } from "react";
import GoogleLogin from "react-google-login";

const Home: NextPage = () => {
  const [heroList, setHeroList] = useState([]);
  const [heroSelected, setHeroSelected] = useState(null);
  const responseGoogle = (response: any) => {
    console.log(response);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>NFTs Manager</title>
        <meta
          name="description"
          content="Simulations and management of NFTs games"
        />
      </Head>

      <main className={styles.main}>
        <Hero onChange={() => {}} heroSelected={heroSelected} />
        <HeroList list={heroList} />
      </main>
    </div>
  );
};

export default Home;
