import { useEffect, useRef, useState } from "react";

function useViewPort() {
	const [width, setWidth] = useState<number>(window.innerWidth || 0);
	const viewportRef = useRef<any>({
		mobileView: width < 768,
		tabView: width > 767 && width < 1025,
		desktopView: width > 1024,
	});

	const handleOnResize = () => {
		const width: number = window.innerWidth || 0;
		setWidth(width);
		viewportRef.current = {
			mobileView: width < 768,
			tabView: width > 767 && width < 1025,
			desktopView: width > 1024,
		};
	};

	useEffect(() => {
		window.addEventListener("resize", handleOnResize);
		return () => window.removeEventListener("resize", handleOnResize);
	}, [handleOnResize]);

	return { width, ...viewportRef?.current };
}

export default useViewPort;
