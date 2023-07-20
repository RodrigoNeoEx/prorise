import { Fragment } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";

import { menuItems } from "const/menuItems";

export const MenuDesktop = () => {
	return (
		<nav>
			<ul className="flex space-x-6">
				{menuItems.map(({ name, subMenus }) => (
					<Fragment key={name}>
						{subMenus ? (
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild>
									<li
										key={name}
										className="flex cursor-pointer text-base font-bold uppercase text-white"
									>
										<span>{name}</span>
										<MdKeyboardArrowDown size={25} className="ml-2 text-white" />
									</li>
								</DropdownMenu.Trigger>

								<DropdownMenu.Portal>
									<DropdownMenu.Content className="mt-2 min-w-[200px] rounded-md bg-dark-600 py-2 text-white shadow-md">
										{subMenus.map(({ name }) => (
											<DropdownMenu.Item
												key={name}
												className="hover:dark-400 cursor-pointer border-none px-4 py-1"
											>
												{name}
											</DropdownMenu.Item>
										))}

										<DropdownMenu.Arrow className="fill-white" />
									</DropdownMenu.Content>
								</DropdownMenu.Portal>
							</DropdownMenu.Root>
						) : (
							<li className="text-md flex cursor-pointer font-bold uppercase text-white">
								<span>{name}</span>
							</li>
						)}
					</Fragment>
				))}
			</ul>
		</nav>
	);
};
