import Image from "next/image";
import EcoImg from "@/public/eco.png";

export const SpaceSection = () => {
	return (
		<section className="flex items-center py-20 md:py-36">
			<div className="mx-auto w-[90vw]">
				<section className="flex flex-wrap-reverse items-center justify-evenly gap-14">
					<div className="aspect-square w-72 md:w-1/3">
						<Image alt="Ecosistema" src={EcoImg} />
					</div>

					<div className="w-96 space-y-6">
						<h3 className="text-4xl font-semibold md:text-6xl">
							Oferecemos tudo o que você precisa
						</h3>
						<p className="text-base text-custom-gray-500 md:text-xl">
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
