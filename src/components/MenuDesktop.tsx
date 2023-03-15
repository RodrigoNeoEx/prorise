import { Fragment } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MdKeyboardArrowDown } from "react-icons/md";

import { menuItems } from "const/menuItems";

export const MenuDesktop = () => {
	return (
		<nav>
			<ul className="flex">
				{menuItems.map(({ name, subMenus }) => (
					<Fragment key={name}>
						{subMenus ? (
							<DropdownMenu.Root>
								<DropdownMenu.Trigger asChild>
									<li
										key={name}
										className="text-md mx-3 flex cursor-pointer uppercase text-orange-500"
									>
										<span>{name}</span>
										<MdKeyboardArrowDown size={25} className="ml-2 text-orange-400" />
									</li>
								</DropdownMenu.Trigger>

								<DropdownMenu.Portal>
									<DropdownMenu.Content className="mt-2 min-w-[200px] rounded-md bg-white py-2 shadow-md">
										{subMenus.map(({ name }) => (
											<DropdownMenu.Item
												key={name}
												className="cursor-pointer border-none py-1 px-4 text-orange-500 hover:bg-orange-500 hover:text-white"
											>
												{name}
											</DropdownMenu.Item>
										))}

										<DropdownMenu.Arrow className="fill-white" />
									</DropdownMenu.Content>
								</DropdownMenu.Portal>
							</DropdownMenu.Root>
						) : (
							<li className="text-md mx-3 flex cursor-pointer uppercase text-orange-500">
								<span>{name}</span>
							</li>
						)}
					</Fragment>
				))}
			</ul>
		</nav>
	);
};
