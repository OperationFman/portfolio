import { NextPage } from "next";
import Head from "next/head";
import {
  TutorialMetaData,
  Languages,
  Tags,
  Topic,
} from "../../../src/tutorials/types";

const SetupNextJS: NextPage = () => {
  return (
    <div>
      <Head>
        <title>...</title>
        <meta
          name="Quickly Setup NextJs ES6 with Typescript"
          content="Get up-and-running with a cleaned up but ready to go repo using nextJs. Includes setting up TS properly, clearing boilerplate, structuring components, routing, setting up an API and SEO consideration"
        />
      </Head>
      <h1>Quickly Setup page</h1>
    </div>
  );
};

export default SetupNextJS;