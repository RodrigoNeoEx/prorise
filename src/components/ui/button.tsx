import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { LucideLoader2 } from "lucide-react";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-white hover:bg-primary/90",
				secondary: "bg-secondary text-white hover:bg-secondary/90",
				outline: "border border-primary bg-transparent hover:bg-primary hover:text-white",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & { loading?: boolean }>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		props.disabled = props.disabled || props.loading;

		return (
			<Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
				{props.loading ? (
					<>
						<LucideLoader2 className="mr-2 animate-spin text-sm" />
						Por favor, aguarde...
					</>
				) : (
					props.children
				)}
			</Comp>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
