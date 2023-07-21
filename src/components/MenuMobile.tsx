import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";

import { Drawer } from "@/components/Drawer";
import { MenuMobileItem } from "@/components/MenuMobileItem";

import { menuItems } from "@/constants/menuItems";

export const MenuMobile = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const openMenu = () => setMenuOpen(true);
	const closeMenu = () => setMenuOpen(false);

	return (
		<div>
			<MdMenu type="button" size={30} cursor="pointer" onClick={openMenu} />

			<Drawer open={menuOpen} onClose={closeMenu}>
				<div className="p-4">
					<MdOutlineClose size={30} color="white" cursor="pointer" onClick={closeMenu} />
				</div>

				<ul>
					{menuItems.map(({ name, Icon, sectionId, subMenus }) => (
						<MenuMobileItem
							key={name}
							name={name}
							Icon={Icon}
							sectionId={sectionId}
							subMenus={subMenus}
						/>
					))}
				</ul>
			</Drawer>
		</div>
	);
};
