import type { NextPage } from "next";

export type NextPageWithSEO<P = Record<string, unknown>, IP = P> = NextPage<
	P,
	IP
> & {
	seoHeader?: (props: P) => JSX.Element;
};
