import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";

import { ContentContainer } from "../ContentContainer";
import { SectionHeader } from "../SectionHeader";

import MapImage from "@/assets/images/map.png";

import CastImage from "@/assets/images/collaborators/cast.png";
import AdviceImage from "@/assets/images/collaborators/advice.png";
import EloImage from "@/assets/images/collaborators/elo.png";
import IdeenImage from "@/assets/images/collaborators/ideen.png";
import MaisVoceImage from "@/assets/images/collaborators/mais-voce.png";
import MeProtegeImage from "@/assets/images/collaborators/me-protege.png";
import MegaworkImage from "@/assets/images/collaborators/megawork.png";
import PositivaImage from "@/assets/images/collaborators/positiva.png";
import QualityWayImage from "@/assets/images/collaborators/quality-way.png";

interface CollaboratorProps {
	imageSrc: string | StaticImageData;
	name: string;
}

export const CollaboratorsSection = () => {
	const collaborators: CollaboratorProps[] = [
		{
			imageSrc: CastImage,
			name: "Cast Group",
		},
		{
			imageSrc: AdviceImage,
			name: "Advise System",
		},
		{
			imageSrc: EloImage,
			name: "Elo",
		},
		{
			imageSrc: IdeenImage,
			name: "Ideen",
		},
		{
			imageSrc: MaisVoceImage,
			name: "+ Você",
		},
		{
			imageSrc: MeProtegeImage,
			name: "Me Protege",
		},
		{
			imageSrc: MegaworkImage,
			name: "Megawork",
		},
		{
			imageSrc: PositivaImage,
			name: "Positiva",
		},
		{
			imageSrc: QualityWayImage,
			name: "Quality Way",
		},
	];

	const Card = ({ imageSrc, name }: CollaboratorProps) => {
		return (
			<div className="mx-2 rounded-lg bg-dark-700 p-2">
				<Image
					src={imageSrc}
					alt={name}
					width={200}
					height={120}
					className="aspect-video object-contain"
				/>
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
						title="Clientes e parceiros"
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
							slidesToShow={7}
							responsive={[
								{
									breakpoint: 450,
									settings: {
										slidesToShow: 2,
									},
								},
								{
									breakpoint: 750,
									settings: {
										slidesToShow: 4,
									},
								},
								{
									breakpoint: 1150,
									settings: {
										slidesToShow: 5,
									},
								},
								{
									breakpoint: 1600,
									settings: {
										slidesToShow: 6,
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
