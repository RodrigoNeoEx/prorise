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
							Potencialize seu negócio com nossas soluções de TI sob medida. Inovação, segurança e
							suporte em um só lugar. Transforme desafios em oportunidades digitais. Conecte-se
							conosco para começar sua jornada tecnológica.
						</p>
					</div>

					<div>
						<p className="mb-4 text-xl">Seções</p>

						<div className="grid max-w-xs gap-x-4 gap-y-8 text-sm text-custom-gray-500">
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

					<div>
						<p className="mb-4 text-xl">Redes</p>

						<div className="flex items-end">
							<Link href="https://www.linkedin.com/company/prorise-it" target="_blank">
								<AiFillLinkedin size={30} title="Linkedin" />
							</Link>
						</div>
					</div>
				</div>
			</ContentContainer>
		</footer>
	);
};
