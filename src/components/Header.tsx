import { Logo } from "components/Logo";
import { MenuMobile } from "components/MenuMobile";
import { MenuDesktop } from "components/MenuDesktop";

export const Header = () => {
	return (
		<header className="flex h-20 items-center justify-between bg-dark-800 px-4 align-middle shadow-md">
			<Logo />

			<div className="hidden md:block">
				<MenuDesktop />
			</div>
			<div className="md:hidden">
				<MenuMobile />
			</div>
		</header>
	);
};
