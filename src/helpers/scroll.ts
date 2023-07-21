import { MouseEvent } from "react";

export const scrollToSection = (event: MouseEvent, sectionId: string) => {
	event.preventDefault();
	const element = document.getElementById(sectionId);
	element?.scrollIntoView({ behavior: "smooth" });
};
