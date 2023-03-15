import { MdHome, MdBuild, MdWork, MdAssuredWorkload, MdFactCheck } from "react-icons/md";

export const menuItems = [
	{ name: "Home", Icon: MdHome },
	{ name: "Serviços", Icon: MdBuild, subMenus: [{ name: "Sub menu 1" }, { name: "Sub menu 2" }] },
	{ name: "Carreira", Icon: MdWork },
	{ name: "institucional", Icon: MdAssuredWorkload },
	{ name: "Cases", Icon: MdFactCheck, subMenus: [{ name: "Sub menu 1" }, { name: "Sub menu 2" }] },
];
