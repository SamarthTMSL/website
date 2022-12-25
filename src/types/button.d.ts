type Variant = "default" | "primary" | "secondary" | "tertiary";

type Shadow = "small" | "medium" | "large" | "none";

export type ButtonProps = {
  variant?: Variant;
  shadow?: Shadow;
  bouncy?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
