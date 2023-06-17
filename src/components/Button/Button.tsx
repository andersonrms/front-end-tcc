import React from 'react';
import classNames from 'classnames';

import { BUTTON_DEFAULT_ELEMENT, BUTTON_MODIFIERS, ButtonProps } from './types';
import styles from './Button.module.css';

const Button = <E extends React.ElementType = typeof BUTTON_DEFAULT_ELEMENT>({
  as,
  modifier = BUTTON_MODIFIERS.PRIMARY,
  loading = false,
  disabled = false,
  className,
  title,
  children,
  ...props
}: ButtonProps<E>) => {
  const Component = as || (props.href ? 'a' : 'button');

  const classname = classNames(
    styles.Button,
    styles[modifier],
    {
      [styles.Loading]: loading,
      [styles.Disabled]: disabled,
    },
    className
  );

  const childrenTitleFallback =
    typeof children === 'string' ? children : undefined;

  return (
    <Component
      className={classname}
      disabled={disabled}
      title={title || childrenTitleFallback}
      target={props?.target}
      {...props}
    >
      <span className={styles.Label}>{children}</span>
    </Component>
  );
};

export default Button;
