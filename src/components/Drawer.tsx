import { ReactNode } from "react";

type DrawerProps = {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
};

export const Drawer = ({ open, onClose, children }: DrawerProps) => {
	return (
		<>
			<div
				className={`fixed right-0 top-0 z-20 h-screen w-72 ${
					open ? "translate-x-0" : "translate-x-full"
				} overflow-y-auto bg-dark-600 transition-transform`}
			>
				{children}
			</div>

			<div
				className={`${
					open ? "block" : "hidden"
				} bg-black absolute bottom-0 left-0 right-0 top-0 h-screen w-screen opacity-50`}
				onClick={onClose}
			/>
		</>
	);
};
