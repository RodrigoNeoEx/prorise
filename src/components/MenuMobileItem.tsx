import { scrollToSection } from "@/helpers/scroll";
import { useState, Fragment } from "react";
import { IconType } from "react-icons/lib";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type MenuMobileItemProps = {
	name: string;
	Icon: IconType;
	sectionId?: string;
	subMenus?: {
		name: string;
	}[];
};

export const MenuMobileItem = ({ name, Icon, sectionId, subMenus }: MenuMobileItemProps) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => setDropdownOpen(previous => !previous);

	const hasSubMenu = !!subMenus?.length;

	return (
		<>
			<li
				key={name}
				className="flex justify-between px-4 py-2 hover:cursor-pointer hover:bg-dark-400"
				onClick={e => (hasSubMenu ? toggleDropdown() : scrollToSection(e, sectionId || ""))}
			>
				<div className="flex">
					<Icon size={25} />
					<span className="ml-2 inline-block">{name}</span>
				</div>

				{hasSubMenu && (
					<Fragment>
						{dropdownOpen ? <MdKeyboardArrowUp size={25} /> : <MdKeyboardArrowDown size={25} />}
					</Fragment>
				)}
			</li>

			{hasSubMenu && dropdownOpen && (
				<ul>
					{subMenus.map(({ name }) => (
						<li key={name} className="px-8 py-2 hover:bg-dark-400">
							{name}
						</li>
					))}
				</ul>
			)}
		</>
	);
};
