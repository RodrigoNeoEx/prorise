import { ContentContainer } from "@/components/ContentContainer";
import { motion } from "framer-motion";

export const HomeSection = () => {
	return (
		<section className="h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] min-h-[400px] bg-fundo bg-cover">
			<ContentContainer>
				<div className="flex h-[calc(100vh-80px)] flex-col justify-center space-y-4">
					<motion.h2
						className="max-w-[300px] text-3xl font-bold md:max-w-sm md:text-4xl 2xl:max-w-[600px] 2xl:text-6xl"
						initial={{ opacity: 0, marginLeft: -50 }}
						animate={{ opacity: 1, marginLeft: 0 }}
						transition={{ duration: 1.5 }}
					>
						Novas <span className="text-secondary">ideias</span> para uma nova era{" "}
						<span className="text-primary">digital</span>
					</motion.h2>

					<motion.span
						className="block max-w-sm text-custom-gray-500 md:max-w-md 2xl:max-w-[650px]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 1 }}
					>
						A good design is not only aesthetically pleasing, but also functional. It should be able
						to solve the problem
					</motion.span>
				</div>
			</ContentContainer>
		</section>
	);
};
