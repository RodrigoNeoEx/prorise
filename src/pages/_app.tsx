import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={inter.className}>
			<Component {...pageProps} />
			<ToastContainer theme="dark" />
		</main>
	);
}
