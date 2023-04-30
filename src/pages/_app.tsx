import Layout from "@/components/Layout";
import { globalStyles } from "@/styles/stitchesConfig";
import type { AppProps } from "next/app";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
	uri: "https://graphql.datocms.com/",
});

const authLink = setContext((_, { headers }: any) => {
	return {
		headers: {
			...headers,
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
		},
	};
});

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
	globalStyles();
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
