import { ContentContainer } from "@/components/ContentContainer";
import { menuItems } from "@/constants/menuItems";
import { scrollToSection } from "@/helpers/scroll";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
	return (
		<footer className="bg-dark-700 py-12">
			<ContentContainer>
				<div className="justify-around space-y-6 md:flex md:space-y-0">
					<div className="space-y-4">
						<p className="text-4xl font-bold uppercase">Prorise</p>
						<p className="max-w-xs text-base leading-7 text-custom-gray-500">
							Um Novo Conceito que revolucionará sua jornada digital. Desperte a inovação e descubra
							soluções criativas com nosso time apaixonado. Junte-se a nós hoje mesmo!
						</p>
					</div>

					<div>
						<p className="mb-4 text-xl">Seções</p>

						<div className="grid grid-cols-2 gap-x-4 gap-y-8 text-sm text-custom-gray-500 md:grid-cols-3">
							<div className="flex flex-col space-y-3">
								{menuItems.map(({ name, sectionId }) => (
									<a
										key={name}
										onClick={e => scrollToSection(e, sectionId)}
										className="hover:cursor-pointer"
									>
										{name}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* <div>
						<p className="mb-4 text-xl">Redes</p>

						<div className="flex items-end">
							<Link href="https://linkedin.com" target="_blank">
								<AiFillLinkedin size={30} title="Linkedin" />
							</Link>
						</div>
					</div> */}
				</div>
			</ContentContainer>
		</footer>
	);
};
