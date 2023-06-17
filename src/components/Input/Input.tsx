/* eslint-disable react/display-name */
'use client';

import React, { useState, useCallback, useRef } from 'react';
import classnames from 'classnames';

import { ALLOWED_TAGS, Text } from '../Text';

import styles from './Input.module.css';
import { InputProps } from './types';
import { useMergeRefs } from '../../helpers/useMergeRefs';

const Input = React.forwardRef(
  (
    {
      className,
      hasError,
      name,
      errorMessage,
      onFocus,
      onBlur,
      ...rest
    }: InputProps,
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const refs = useMergeRefs(inputRef, ref);

    const handleInputAreaClick = useCallback(() => {
      if (inputRef?.current) inputRef.current.focus();
    }, []);

    const handleInputFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        if (onFocus) onFocus(e);
      },
      [onFocus]
    );

    const handleInputBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        if (onBlur) onBlur(e);
      },
      [onBlur]
    );

    const inputWrapperClass = classnames(
      styles.Input,
      isFocused && styles.isFocused,
      hasError && styles.hasError,
      className && className
    );

    return (
      <div className={styles.inputArea} onClick={handleInputAreaClick}>
        <input
          ref={refs}
          className={inputWrapperClass}
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />

        {hasError && errorMessage && (
          <Text className={styles.InputErrorMessage} tag={ALLOWED_TAGS.SPAN}>
            {errorMessage}
          </Text>
        )}
      </div>
    );
  }
);

export default Input;
