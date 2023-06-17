import { PolymorphicProps } from '../types';

export const BUTTON_MODIFIERS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  POSITIVE: 'positive',
  TERTIARY: 'tertiary',
} as const;

export type BUTTON_MODIFIERS =
  (typeof BUTTON_MODIFIERS)[keyof typeof BUTTON_MODIFIERS];

interface Props {
  modifier?: BUTTON_MODIFIERS;
  loading?: boolean;
  disabled?: boolean;
  title?: string;
  href?: string;
  children?: string | React.ReactNode;
  target?: string;
  className?: string;
}

export const BUTTON_DEFAULT_ELEMENT = 'button';

export type ButtonProps<
  E extends React.ElementType = typeof BUTTON_DEFAULT_ELEMENT
> = PolymorphicProps<E, Props>;
