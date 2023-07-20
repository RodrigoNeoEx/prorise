import { ContentContainer } from "./ContentContainer";
import { SectionHeader } from "./SectionHeader";

import { GrGroup, GrUserManager, GrCode } from "react-icons/gr";

export const ServicesSection = () => {
	const services = [
		{
			icon: <GrGroup size={40} color="white" />,
			title: "Bodyshop",
			description:
				"Nossa bodyshop de TI oferece talentos especializados para atender às suas necessidades de desenvolvimento, manutenção e suporte de software. Contamos com uma equipe qualificada para agregar valor e eficiência ao seu projeto.",
		},
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

	return (
		<section>
			<ContentContainer className="my-16">
				<SectionHeader
					title="Serviços Oferecidos"
					description="Nosso time oferece as mais recentes e inovadoras soluções para impulsionar sua empresa com eficiência e segurança tecnológica."
				/>

				<div className="mt-10 grid w-fit gap-10 text-center md:grid-cols-2 md:gap-20 xl:grid-cols-3 xl:gap-10 2xl:gap-[8rem]">
					{services.map(({ icon, title, description }) => {
						return (
							<div
								key={title}
								className="col flex flex-col items-center gap-6 rounded-2xl border-2 border-dark-500 px-10 py-14"
							>
								<div className="flex h-20 w-20 items-center justify-center rounded-[30px] bg-primary">
									{icon}
								</div>

								<h4 className="text-xl font-bold">{title}</h4>

								<p className="text-custom-gray-500">{description}</p>
							</div>
						);
					})}
				</div>
			</ContentContainer>
		</section>
	);
};
