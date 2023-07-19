import Image from "next/image";

import FundoHome from "assets/images/fundo-home.png";

export const HomeSection = () => {
	return (
		<section className="w-full">
			<div className="flex flex-col justify-center">
				<Image
					src={FundoHome}
					width={1440}
					height={703}
					alt="Plano de fundo"
					className="h-[calc(100vh-80px)] max-h-[calc(100vh-80px)] min-h-[400px] w-full object-cover md:h-auto"
				/>

				<div className="md:mx-30 xl:mx-50 absolute mx-5 space-y-4 sm:mx-14 lg:mx-40">
					<h2 className="max-w-[300px] text-3xl font-bold text-white md:max-w-sm md:text-4xl 2xl:max-w-[600px] 2xl:text-6xl">
						Novas <span className="text-secondary">ideias</span> para uma nova era{" "}
						<span className="text-primary">digital</span>
					</h2>

					<span className="block max-w-sm text-custom-gray-500 md:max-w-md 2xl:max-w-[650px]">
						A good design is not only aesthetically pleasing, but also functional. It should be able
						to solve the problem
					</span>
				</div>
			</div>
		</section>
	);
};
