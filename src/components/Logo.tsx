import Image from "next/image";
import Link from "next/link";

import ProriseLogo from "../assets/images/logo-priorise.svg";

export const Logo = () => {
	return (
		<div className="w-fit">
			<Link href="/">
				<Image src={ProriseLogo} alt="Prorise logo" width={125} height={40} />
			</Link>
		</div>
	);
};
