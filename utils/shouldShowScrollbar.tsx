import { NextRouter, useRouter } from "next/router";
import { isClientSide } from "./isClientSide";

export const shouldShowScrollBar = (router: NextRouter) => {
  if (!isClientSide()) {
    return;
  }

  const handleRouteChange = (url: string) => {
    if (url !== "/" && isClientSide()) {
      document.body.style.overflow = "visible";
      return;
    }

    document.body.style.overflow = "hidden";
  };

  router.events.on("routeChangeStart", handleRouteChange);
};
