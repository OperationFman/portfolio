import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PageContent = () => {
  const router = useRouter();

  const { link } = router.query;

  return <h1>{`Found page with link: ${link}`}</h1>;
};

export default PageContent;
