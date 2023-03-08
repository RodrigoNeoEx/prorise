import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";

export const MenuMobile = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div>
			{menuOpen ? (
				<MdOutlineClose size={30} cursor="pointer" onClick={() => setMenuOpen(false)} />
			) : (
				<MdMenu size={30} cursor="pointer" onClick={() => setMenuOpen(true)} />
			)}
		</div>
	);
};
