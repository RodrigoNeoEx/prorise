import Image from "next/image";
import EcoImg from "@/public/eco.png";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

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
		<section className="flex min-h-screen items-center">
			<div className="mx-auto w-[90vw]">
				<section className="flex flex-wrap-reverse items-center justify-evenly gap-10">
					<motion.div
						className="aspect-square w-1/3"
						ref={servicesContainerRef}
						initial={{ scale: 0 }}
						// animate={{ scale: 1 }}
						// transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
					>
						<Image alt="Ecosistema" src={EcoImg} />
					</motion.div>

					<div className="w-96 space-y-6">
						<h3 className="text-6xl font-semibold">Oferecemos tudo o que você precisa</h3>
						<p className="text-xl text-custom-gray-500">
							A good design is not only aesthetically pleasing, but also functional. It should be
							able to solve the problem{" "}
						</p>
						<button className="rounded-sm bg-primary px-4 py-2 text-lg font-bold text-white">
							Saiba mais
						</button>
					</div>
				</section>
			</div>
		</section>
	);
};
