import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonProps } from "types/button";

const buttonStyles = cva(
  `inline-block rounded-md px-4 py-1.5 text-base font-semibold ring-0 border leading-7 transition-all ease-in-out`,
  {
    variants: {
      variant: {
        default:
          "bg-zinc-200 text-black border border-zinc-200 hover:bg-zinc-300 hover:border-zinc-300",
        primary:
          "bg-orange-600 text-white border-orange-600 hover:bg-orange-700 hover:border-orange-700",
        secondary: "bg-white hover:bg-zinc-100 text-orange-600",
        tertiary:
          "hover:bg-zinc-50/10 border-zinc-100 text-white hover:border-white",
      },
      bouncy: {
        true: "duration-150 active:scale-95",
      },
      shadow: {
        small: "shadow-sm",
        medium: "shadow",
        large: "shadow-lg",
        none: "shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
      bouncy: true,
      shadow: "medium",
    },
  }
);

const Button = ({
  variant,
  bouncy,
  shadow,
  ...props
}: ButtonProps & VariantProps<typeof buttonStyles>) => {
  return (
    <button className={buttonStyles({ variant, bouncy, shadow })} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
