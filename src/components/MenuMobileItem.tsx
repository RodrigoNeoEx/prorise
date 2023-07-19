import { useState, Fragment } from "react";
import { IconType } from "react-icons/lib";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type MenuMobileItemProps = {
	name: string;
	Icon: IconType;
	subMenus?: {
		name: string;
	}[];
};

export const MenuMobileItem = ({ name, Icon, subMenus }: MenuMobileItemProps) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => setDropdownOpen(previous => !previous);

	const hasSubMenu = !!subMenus?.length;

	return (
		<>
			<li
				key={name}
				className="flex justify-between px-4 py-2 hover:cursor-pointer hover:bg-dark-400"
				onClick={toggleDropdown}
			>
				<div className="flex">
					<Icon size={25} className="text-white" />
					<span className="ml-2 inline-block text-white">{name}</span>
				</div>

				{hasSubMenu && (
					<Fragment>
						{dropdownOpen ? (
							<MdKeyboardArrowUp size={25} className="text-white" />
						) : (
							<MdKeyboardArrowDown size={25} className="text-white" />
						)}
					</Fragment>
				)}
			</li>

			{hasSubMenu && dropdownOpen && (
				<ul>
					{subMenus.map(({ name }) => (
						<li key={name} className="px-8 py-2 text-white hover:bg-dark-400">
							{name}
						</li>
					))}
				</ul>
			)}
		</>
	);
};
