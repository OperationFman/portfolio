import { createContext, useContext, useState, ReactNode } from "react";
import styles from "./SEOHeaderContext.module.scss";

interface SEOHeaderContextType {
	seoHeader: string | null;
	setSEOHeader: (value: string | null) => void;
}

const SEOHeaderContext = createContext<SEOHeaderContextType | undefined>(
	undefined,
);

export const SEOHeaderProvider = ({ children }: { children: ReactNode }) => {
	const [seoHeader, setSEOHeader] = useState<string | null>(null);

	return (
		<SEOHeaderContext.Provider value={{ seoHeader, setSEOHeader }}>
			{children}
		</SEOHeaderContext.Provider>
	);
};

export const useSEOHeader = () => {
	const context = useContext(SEOHeaderContext);
	if (!context) {
		throw new Error("useSEOHeader must be used within SEOHeaderProvider");
	}
	return context;
};

export const SEOHeader = () => {
	const { seoHeader } = useSEOHeader();
	if (!seoHeader) return null;
	return <h1 className={styles.behindNav}>{seoHeader}</h1>;
};
