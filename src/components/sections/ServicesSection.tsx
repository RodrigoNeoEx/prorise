import { ContentContainer } from "@/components/ContentContainer";
import { SectionHeader } from "@/components/SectionHeader";

import { GrUserManager, GrCode } from "react-icons/gr";

import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const ServicesSection = () => {
	const servicesContainerRef = useRef(null);
	const servicesContainerIsInView = useInView(servicesContainerRef, {
		margin: "0px 0px -200px 0px",
	});
	const controls = useAnimationControls();

	useEffect(() => {
		if (servicesContainerIsInView) {
			controls.start("visible");
		}
	}, [servicesContainerIsInView]);

	const services = [
		{
			icon: <GrCode size={40} color="white" />,
			title: "Outsourcing",
			description:
				"Descubra a tranquilidade do Outsourcing de TI conosco. Nossa equipe de especialistas cuida da gestão e manutenção dos seus sistemas, permitindo que você foque no crescimento dos negócios. Simplifique, otimize e alcance resultados excepcionais.",
		},
		{
			icon: <GrCode size={40} color="white" />,
			title: "Consultoria tech",
			description:
				"Como consultoria tech de TI oferecemos insights estratégicos e soluções personalizadas para impulsionar sua empresa rumo à excelência tecnológica. Aproveite nosso conhecimento especializado para alinhar a TI aos seus objetivos de negócios e alcançar resultados excepcionais.",
		},
		{
			icon: <GrUserManager size={40} color="white" />,
			title: "Gestão e Administração",
			description:
				"Possuimos equipes especializadas em Gestão e Administração de TI para garantir operações eficientes e seguras. Deixe a infraestrutura tecnológica conosco e foque no sucesso dos seus negócios, com suporte confiável e soluções sob medida para suas necessidades.",
		},
		{
			icon: <GrCode size={40} color="white" />,
			title: "Software house",
			description:
				"Somos uma Software House de TI dedicada a criar soluções inovadoras e personalizadas para o seu negócio. Com expertise em desenvolvimento de software, entregamos produtos de alta qualidade, impulsionando a eficiência e o crescimento da sua empresa.",
		},
		{
			icon: <GrCode size={40} color="white" />,
			title: "Treinamentos",
			description:
				"Nossos treinamentos em tecnologia oferecem conhecimentos práticos e atualizados para capacitar sua equipe e alavancar sua performance no mundo digital. Desenvolva habilidades essenciais para enfrentar os desafios tecnológicos e impulsionar o sucesso do seu negócio.",
		},
	];

	const containerAnimation = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const itemAnimation = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<section id="services">
			<ContentContainer className="my-16">
				<SectionHeader
					title="Serviços Oferecidos"
					description="Nosso time oferece as mais recentes e inovadoras soluções para impulsionar sua empresa com eficiência e segurança tecnológica."
				/>
				<motion.div ref={servicesContainerRef}>
					<motion.div
						className="mt-10 flex w-fit flex-wrap justify-center gap-10 text-center md:gap-20 xl:gap-10"
						variants={containerAnimation}
						initial="hidden"
						animate={controls}
					>
						{services.map(({ icon, title, description }) => {
							return (
								<motion.div
									key={title}
									className="col flex flex-1 flex-col items-center gap-6 rounded-2xl border-2 border-dark-500 p-8 shadow-md shadow-white"
									variants={itemAnimation}
									whileHover={{ scale: 1.03 }}
								>
									<div className="flex w-full items-center gap-6">
										<div className="flex h-20 w-20 items-center justify-center rounded-[30px] bg-primary">
											{icon}
										</div>
										<h4 className="max-w-full flex-1 text-start text-xl font-bold">{title}</h4>
									</div>

									<p className="text-start text-custom-gray-500">{description}</p>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</ContentContainer>
		</section>
	);
};
