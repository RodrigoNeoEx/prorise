import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";

import { ContentContainer } from "../ContentContainer";
import { SectionHeader } from "../SectionHeader";

import FundoHome from "@/assets/images/fundo-home.png";
import MapImage from "@/assets/images/map.png";

interface CollaboratorProps {
	imageSrc: string | StaticImageData;
	name: string;
}

export const CollaboratorsSection = () => {
	const collaborators: CollaboratorProps[] = [
		{
			imageSrc: FundoHome,
			name: "Colaborador 1",
		},
		{
			imageSrc: FundoHome,
			name: "Colaborador 2",
		},
		{
			imageSrc: FundoHome,
			name: "Colaborador 3",
		},
		{
			imageSrc: FundoHome,
			name: "Colaborador 4",
		},
		{
			imageSrc: FundoHome,
			name: "Colaborador 5",
		},
	];

	const Card = ({ imageSrc, name }: CollaboratorProps) => {
		return (
			<div className="relative mx-2 rounded-md bg-dark-900">
				<Image src={imageSrc} alt={name} width={500} height={400} className="w-full object-cover" />

				{/* <div className="absolute bottom-1 left-2 z-10">
					<h4 className="text-xl font-semibold text-white">{name}</h4>
				</div> */}
			</div>
		);
	};

	return (
		<section
			id="collaborators"
			className="mb-[calc(5rem+185px)] mt-[5rem] flex min-h-[100vh] items-center md:mb-[calc(5rem+125px)] lg:mb-[calc(5rem+150px)]"
		>
			<div className="w-full bg-dark-700 pb-[calc(5rem+185px)] pt-[5rem] md:pb-[calc(5rem+125px)] lg:pb-[calc(5rem+150px)]">
				<ContentContainer>
					<SectionHeader
						title="Colaboradores de Destaque"
						description="A good design is not only aesthetically pleasing, but also functional. It should be able
					to solve the problem."
					/>
					<div className="mt-20">
						<Slider
							infinite
							autoplay
							speed={2000}
							autoplaySpeed={3000}
							arrows={false}
							slidesToShow={4}
							responsive={[
								{
									breakpoint: 700,
									settings: {
										slidesToShow: 1,
									},
								},
								{
									breakpoint: 1150,
									settings: {
										slidesToShow: 2,
									},
								},
								{
									breakpoint: 1600,
									settings: {
										slidesToShow: 3,
									},
								},
							]}
						>
							{collaborators.map(collaborator => (
								<Card key={collaborator.name} {...collaborator} />
							))}
						</Slider>
					</div>

					<div className="relative flex flex-col items-center">
						<div
							className="absolute mt-20 h-[100px] w-[70vw] max-w-[290px] animate-pulse rounded-3xl sm:max-w-[370px] md:max-w-[900px]"
							style={{
								boxShadow: "0 0 1000px 10px rgb(72, 171, 224, 0.5)",
							}}
						/>

						<div className="absolute mt-20 flex h-[370px] w-[70vw] max-w-[290px] flex-wrap items-center justify-between gap-8 rounded-3xl bg-gradient-to-r from-[#1393BA] to-primary py-5 sm:max-w-[370px] md:h-[250px] md:max-w-[900px] md:flex-nowrap md:gap-0 lg:h-[300px]">
							<div className="mx-3 flex flex-col items-start justify-center">
								<p className="text-sm text-custom-gray-200 sm:text-base">
									Conectando Talentos Brasil Afora
								</p>
								<h4 className="text-2xl font-bold sm:text-4xl">Nossa Rede de Colaboradores</h4>
							</div>

							<Image
								src={MapImage}
								height={300}
								width={370}
								alt="Mapa"
								className="ml-auto h-auto sm:w-[300px] md:w-[250px] lg:h-[90%] lg:w-auto"
							/>
						</div>
					</div>
				</ContentContainer>
			</div>
		</section>
	);
};
