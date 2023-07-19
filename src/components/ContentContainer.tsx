import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContentContainerProps {
	children: ReactNode;
	className?: string;
}

export const ContentContainer = ({ children, className }: ContentContainerProps) => {
	return (
		<div
			className={twMerge(
				"mx-auto w-[95vw] sm:w-[92vw] md:w-[89vw] lg:w-[86vw] xl:w-[83vw] 2xl:w-[80vw]",
				className
			)}
		>
			{children}
		</div>
	);
};
