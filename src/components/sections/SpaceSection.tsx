import Image from "next/image";
import EcoLayer from "@/public/eco-layer.svg";
import TechLayer from "@/public/tech-layer.svg";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { scrollToSection } from "@/helpers/scroll";

export const SpaceSection = () => {
	const [servicesContainerRef, animate] = useAnimate();
	const servicesContainerIsInView = useInView(servicesContainerRef, {
		margin: "0px 0px -200px 0px",
	});

	useEffect(() => {
		if (servicesContainerIsInView) {
			animate(
				servicesContainerRef.current,
				{ scale: 1 },
				{ type: "spring", stiffness: 50, damping: 10 }
			);
		}
	}, [servicesContainerIsInView]);

	return (
		<section id="space" className="flex items-center py-20 md:py-36">
			<div className="mx-auto w-[90vw]">
				<section className="flex flex-wrap-reverse items-center justify-evenly gap-14">
					<motion.div
						className="relative aspect-square w-72 md:w-1/3"
						ref={servicesContainerRef}
						initial={{ scale: 0 }}
					>
						<motion.div
							className="absolute z-10"
							transition={{
								duration: 60,
								repeat: Infinity,
								ease: "linear",
							}}
							animate={{ rotate: 360 }}
						>
							<Image alt="Ecosistema" src={TechLayer} draggable={false} />
						</motion.div>
						<Image alt="Ecosistema" src={EcoLayer} className="absolute" draggable={false} />
					</motion.div>

					<div className="w-96 space-y-6">
						<h3 className="text-4xl font-semibold md:text-6xl">
							Oferecemos tudo o que você precisa
						</h3>
						<p className="text-base text-custom-gray-500 md:text-xl">
							Descubra as melhores tecnologias do mercado. Inovação, desempenho e confiabilidade
							reunidos em uma única plataforma. Potencialize seu negócio com nosso ecossistema de
							soluções de ponta. Experimente hoje!{" "}
						</p>
						<Button onClick={e => scrollToSection(e, "network")}>Saiba mais</Button>
					</div>
				</section>
			</div>
		</section>
	);
};
