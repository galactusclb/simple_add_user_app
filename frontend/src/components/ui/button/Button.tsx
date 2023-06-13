import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
	"custom-btn d-inline-flex align-items-center justify-content-center ",
	{
		variants: {
			variant: {
				default: "variant-default",
				outline: "",
				link: "variant-link",
			},
			size: {
				default: "size-default py-2 px-4",
				sm: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, disabled, isLoading, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={buttonVariants({ variant, size, className })}
				disabled={disabled}
				{...props}
			>
				{disabled ? (
					<span
						className="spinner-border spinner-border-sm me-1"
						role="status"
						aria-hidden="true"
					/>
				) : null}
				{props.children}
			</button>
		);
	}
);

export { Button, buttonVariants };
