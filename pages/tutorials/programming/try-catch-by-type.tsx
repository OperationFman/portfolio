import { NextPage } from "next";
import Head from "next/head";

const TryCatchByType: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Try & Catch by a Type</title>
        <meta
          name="Quickly Setup NextJs ES6 with Typescript"
          content="Simple technique ff you ever need to handle a thrown error differently because it has a type. Use case: It might be an error you'd like the user to see."
        />
      </Head>
      <h1>Blah</h1>
    </div>
  );
};

export default TryCatchByType;
