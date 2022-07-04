import { NextRouter, useRouter } from "next/router";
import { isClientSide } from "./isClientSide";

export const shouldShowScrollBar = (router: NextRouter) => {
  // React Parallax tool forces a second scrollbar to appear on the homepage
  // This file removes the default scrollbar on the homepage but shows it for all other pages
  if (!isClientSide()) {
    return;
  }

  const handleRouteChange = (url: string) => {
    if (url === "/") {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "visible";
  };

  router.events.on("routeChangeStart", handleRouteChange);
};
