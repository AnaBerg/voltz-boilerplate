import {  ReactNode } from 'react';

export type Variant = 'title'
| 'content-title'
| 'subtitle'
| 'section-title'
| 'caption'
| 'body'
| 'body-bold';

export type Color ='primary' | 'secondary' | 'highlight' | 'warning' | 'error' | 'success';

export type TypographProps = {
  variant?: Variant;
  children?: ReactNode;
  color?: Color;
}