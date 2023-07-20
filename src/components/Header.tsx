import { Logo } from "@/components/Logo";
import { MenuMobile } from "@/components/MenuMobile";
import { MenuDesktop } from "@/components/MenuDesktop";
import { ContentContainer } from "./ContentContainer";

export const Header = () => {
	return (
		<header className=" bg-dark-800 shadow-md">
			<ContentContainer>
				<div className="flex h-20 items-center justify-between align-middle">
					<Logo />

					<div className="hidden md:block">
						<MenuDesktop />
					</div>
					<div className="md:hidden">
						<MenuMobile />
					</div>
				</div>
			</ContentContainer>
		</header>
	);
};
