import React from "react";
import { FieldError } from "react-hook-form";

interface FieldProps {
	children: React.ReactNode;
	error?: FieldError;
}

export const Field = ({ children, error }: FieldProps) => {
	return (
		<div>
			{children}
			{error && <p className="mt-1 text-xs text-secondary">{error.message}</p>}
		</div>
	);
};
