import Image from "next/image";
import EcoImg from "@/public/eco.png";

export const SpaceSection = () => {
	return (
		<section className="flex min-h-screen items-center">
			<div className="mx-auto w-[90vw]">
				<section className="flex flex-wrap-reverse items-center justify-evenly gap-10">
					<div className="aspect-square w-1/3">
						<Image alt="Ecosistema" src={EcoImg} />
					</div>

					<div className="w-96 space-y-6">
						<h3 className="text-6xl font-semibold">Oferecemos tudo o que você precisa</h3>
						<p className="text-xl text-custom-gray-500">
							A good design is not only aesthetically pleasing, but also functional. It should be
							able to solve the problem{" "}
						</p>
						<button className="">Saiba mais</button>
					</div>
				</section>
			</div>
		</section>
	);
};
