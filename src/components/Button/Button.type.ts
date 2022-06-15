import { ReactNode, MouseEvent } from "react";

export type Variant = 'primary' | 'secondary' | 'highlight' | 'text';


export type ButtonProps = {
  variant?: Variant;
  transparent?: boolean;
  endIcon?: 'string';
  startIcon?: 'string';
  children?: ReactNode;
  fullWidth?: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}