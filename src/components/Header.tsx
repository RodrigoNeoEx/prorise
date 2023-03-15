import { Logo } from "components/Logo";
import { MenuMobile } from "components/MenuMobile";
import { MenuDesktop } from "components/MenuDesktop";

export const Header = () => {
	return (
		<header className="flex items-center justify-between p-4 shadow-md">
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
