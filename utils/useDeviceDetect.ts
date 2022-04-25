import { useState, useEffect } from "react";

export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 800 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return { isMobile };
}
