import React, { forwardRef, InputHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";

const inputVariants = cva("form-control", {
	variants: {
		variant: {
			default: "variant-default",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof inputVariants> {
	name?: string;
}

const FormInput = forwardRef<HTMLInputElement, InputProps>(
	({ type, className, variant, name, disabled, ...props }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				name={name}
				className={inputVariants({ variant, className })}
				aria-describedby={`${name}NameHelp`}
				disabled={disabled}
				{...props}
			/>
		);
	}
);

export { FormInput, inputVariants };
