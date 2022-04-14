import { Button } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Franklin Von Moon</title>
        <meta
          name="Home"
          content="This guy is Franklin V Moon and he's a Full Stack Software Developer. This site contains his Bio, Skills, Tutorials and Projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World</h1>
    </div>
  );
};

export default Home;
