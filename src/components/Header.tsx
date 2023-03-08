import { Logo } from "components/Logo";
import { MenuMobile } from "components/MenuMobile";

export const Header = () => {
	return (
		<header className="flex items-center justify-between p-4 shadow-md">
			<Logo />

			<MenuMobile />
		</header>
	);
};
