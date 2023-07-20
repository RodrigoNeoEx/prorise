import Head from "next/head";

import { Header } from "components/Header";
import { WhatsappButton } from "components/WhatsappButton";
import { HomeSection } from "components/HomeSection";
import { SpaceSection } from "components/SpaceSection";
import { ServicesSection } from "components/ServicesSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>Prorise</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<HomeSection />
			<ServicesSection />
			<SpaceSection />

			<WhatsappButton />
		</>
	);
}
