import Image from "next/image";

import ProriseLogo from "@/assets/images/logo-priorise.svg";
import { scrollToSection } from "@/helpers/scroll";

export const Logo = () => {
	return (
		<div className="w-fit">
			<Image
				src={ProriseLogo}
				alt="Prorise logo"
				width={125}
				height={40}
				onClick={e => scrollToSection(e, "home")}
				className="cursor-pointer"
			/>
		</div>
	);
};
