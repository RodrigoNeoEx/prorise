import { ContentContainer } from "@/components/ContentContainer";
import { SectionHeader } from "@/components/SectionHeader";

import { GrUserManager } from "react-icons/gr";

import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdMenuBook, MdOutlineFactory } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";

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
			icon: <FaPeopleArrows size={40} color="black" />,
			title: "Outsourcing",
			description:
				"Experimente a tranquilidade do Outsourcing de TI conosco. Especialistas cuidam da gestão dos sistemas, para você focar no crescimento. Simplifique, otimize e alcance resultados excepcionais.",
		},
		{
			icon: <BsGraphUpArrow size={40} color="black" />,
			title: "Consultoria Tech",
			description:
				"Oferecemos insights e soluções personalizadas para impulsionar sua empresa rumo à excelência tecnológica. Aproveite nosso conhecimento para alinhar a TI aos seus objetivos e alcançar resultados excepcionais.",
		},
		{
			icon: <GrUserManager size={40} color="black" />,
			title: "Gestão e Administração",
			description:
				"Nossas equipes especializadas em Gestão de TI asseguram operações eficientes e seguras. Deixe a infraestrutura conosco, focando no sucesso dos negócios com suporte confiável e soluções sob medida.",
		},
		{
			icon: <MdOutlineFactory size={40} color="black" />,
			title: "Software House",
			description:
				"Criamos soluções inovadoras para seu negócio. Com expertise em desenvolvimento, entregamos produtos de qualidade, impulsionando eficiência e crescimento empresarial.",
		},
		{
			icon: <MdMenuBook size={40} color="black" />,
			title: "Treinamentos",
			description:
				"Oferecemos conhecimentos práticos para capacitar sua equipe no mundo digital. Desenvolva habilidades essenciais para impulsionar o sucesso do seu negócio diante dos desafios tecnológicos",
		},
		{
			icon: <TbSettingsAutomation size={40} color="black" />,
			title: "RPA e BOT's",
			description:
				"Simplifique tarefas, aumente a eficiência e reduza erros. Transforme seu fluxo de trabalho com automação inteligente, impulsionando produtividade e inovação.",
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
