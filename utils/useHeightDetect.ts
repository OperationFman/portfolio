import { useState, useEffect } from "react";

export default function useHeightDetect() {
	const [isShort, setIsShort] = useState(false);

	useEffect(() => {
		const update = () => {
			setIsShort(window.innerHeight < 750 ? true : false);
		};

		update();
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("resize", update);
		};
	}, []);

	return { isShort };
}
