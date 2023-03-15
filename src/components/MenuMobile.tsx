import { useState } from "react";
import {
	MdMenu,
	MdOutlineClose,
	MdHome,
	MdBuild,
	MdWork,
	MdAssuredWorkload,
	MdFactCheck,
} from "react-icons/md";

import { Drawer } from "components/Drawer";
import { MenuMobileItem } from "components/MenuMobileItem";

const menuItems = [
	{ name: "Home", Icon: MdHome },
	{ name: "Serviços", Icon: MdBuild, subMenus: [{ name: "Sub menu 1" }, { name: "Sub menu 2" }] },
	{ name: "Carreira", Icon: MdWork },
	{ name: "institucional", Icon: MdAssuredWorkload },
	{ name: "Cases", Icon: MdFactCheck },
];

export const MenuMobile = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const openMenu = () => setMenuOpen(true);
	const closeMenu = () => setMenuOpen(false);

	return (
		<div>
			<MdMenu type="button" size={30} cursor="pointer" onClick={openMenu} />

			<Drawer open={menuOpen} onClose={closeMenu}>
				<div className="p-4">
					<MdOutlineClose size={30} cursor="pointer" onClick={closeMenu} />
				</div>

				<ul>
					{menuItems.map(({ name, Icon, subMenus }) => (
						<MenuMobileItem key={name} name={name} Icon={Icon} subMenus={subMenus} />
					))}
				</ul>
			</Drawer>
		</div>
	);
};
