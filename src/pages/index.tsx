import Head from "next/head";

import { Header } from "@/components/Header";
import { WhatsappButton } from "@/components/WhatsappButton";
import { HomeSection } from "@/components/sections/HomeSection";
import { SpaceSection } from "@/components/sections/SpaceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
// import { ProjectsSection } from "@/components/ProjectsSection";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { Footer } from "@/components/Footer";
import { CopyrightSection } from "@/components/sections/CopyrightSection";
import { CollaboratorsSection } from "@/components/sections/CollaboratorsSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>PRORISE - Serviços de Desenvolvimento de Software e Sistemas Empresariais</title>

				<meta
					name="description"
					content="Serviços de Desenvolvimento de Software e Sistemas Empresariais. Visite nosso site e entre em contato!"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="icon" href="/favicon.png" />

				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
			</Head>

			<Header />
			<HomeSection />
			<ServicesSection />
			<CollaboratorsSection />
			<SpaceSection />
			{/* <ProjectsSection /> */}
			<NetworkSection />
			<Footer />
			<CopyrightSection />

			<WhatsappButton />
		</>
	);
}
