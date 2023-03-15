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
				className={`fixed top-0 right-0 z-20 h-screen w-72 ${
					open ? "translate-x-0" : "translate-x-full"
				} overflow-y-auto bg-white transition-transform`}
			>
				{children}
			</div>

			<div
				className={`${
					open ? "block" : "hidden"
				} absolute top-0 right-0 bottom-0 left-0 h-screen w-screen bg-black opacity-50`}
				onClick={onClose}
			/>
		</>
	);
};
