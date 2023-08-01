import { IconType } from "react-icons/lib";
import { MdBuild, MdWork, MdAssuredWorkload, MdFactCheck } from "react-icons/md";

type SubMenusProps = {
	name: string;
};

type MenuItemsProps = {
	name: string;
	Icon: IconType;
	sectionId: string;
	subMenus?: SubMenusProps[];
};

export const menuItems: MenuItemsProps[] = [
	{ name: "Serviços", Icon: MdBuild, sectionId: "services" },
	{ name: "Parceiros", Icon: MdWork, sectionId: "collaborators" },
	{ name: "Tecnologias", Icon: MdAssuredWorkload, sectionId: "space" },
	{ name: "Projetos", Icon: MdFactCheck, sectionId: "projects" },
	{ name: "Contato", Icon: MdFactCheck, sectionId: "network" },
];
