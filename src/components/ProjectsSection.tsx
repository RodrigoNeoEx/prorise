import Image, { StaticImageData } from "next/image";
import { ContentContainer } from "./ContentContainer";
import { SectionHeader } from "./SectionHeader";

import Slider from "react-slick";

import FundoHome from "../assets/images/fundo-home.png";

interface ProjectProps {
	imageSrc: string | StaticImageData;
	title: string;
	description: string;
}

export const ProjectsSection = () => {
	const projects: ProjectProps[] = [
		{
			imageSrc: FundoHome,
			title: "Projeto 1",
			description:
				"Nossa bodyshop de TI oferece talentos especializados para atender às suas necessidades de desenvolvimento, manutenção e suporte de software. Contamos com uma equipe qualificada para agregar valor e eficiência ao seu projeto.",
		},
		{
			imageSrc: FundoHome,
			title: "Projeto 2",
			description:
				"Descubra a tranquilidade do Outsourcing de TI conosco. Nossa equipe de especialistas cuida da gestão e manutenção dos seus sistemas, permitindo que você foque no crescimento dos negócios. Simplifique, otimize e alcance resultados excepcionais.",
		},
		{
			imageSrc: FundoHome,
			title: "Projeto 3",
			description:
				"Como consultoria tech de TI oferecemos insights estratégicos e soluções personalizadas para impulsionar sua empresa rumo à excelência tecnológica. Aproveite nosso conhecimento especializado para alinhar a TI aos seus objetivos de negócios e alcançar resultados excepcionais.",
		},
		{
			imageSrc: FundoHome,
			title: "Projeto 4",
			description:
				"Possuimos equipes especializadas em Gestão e Administração de TI para garantir operações eficientes e seguras. Deixe a infraestrutura tecnológica conosco e foque no sucesso dos seus negócios, com suporte confiável e soluções sob medida para suas necessidades.",
		},
		{
			imageSrc: FundoHome,
			title: "Projeto 5",
			description:
				"Somos uma Software House de TI dedicada a criar soluções inovadoras e personalizadas para o seu negócio. Com expertise em desenvolvimento de software, entregamos produtos de alta qualidade, impulsionando a eficiência e o crescimento da sua empresa.",
		},
	];

	const Card = ({ imageSrc, title, description }: ProjectProps) => {
		return (
			<div className="flex flex-col bg-dark-800 md:flex-row">
				<Image
					src={imageSrc}
					alt={title}
					width={500}
					height={500}
					className="h-[400px] w-full object-cover md:w-[300px] lg:w-[400px]"
				/>

				<div className="m-10 space-y-7">
					<h4 className="text-3xl font-semibold">{title}</h4>
					<p className="text-custom-gray-500">{description}</p>
				</div>
			</div>
		);
	};

	return (
		<section id="projects" className="py-16">
			<div className="bg-dark-700 py-12">
				<ContentContainer>
					<SectionHeader
						title="Nossos Projetos"
						description="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem."
					/>

					<div className="mb-10 mt-20 flex justify-center">
						<div className="w-[1000px] max-w-[90%]">
							<Slider dots infinite slidesToShow={1} autoplay autoplaySpeed={5000}>
								{projects.map(project => (
									<Card key={project.title} {...project} />
								))}
							</Slider>
						</div>
					</div>
				</ContentContainer>
			</div>
		</section>
	);
};
