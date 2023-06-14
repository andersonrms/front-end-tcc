'use client'

import React, { useState, useCallback, useRef } from "react";
import classnames from 'classnames'

import { ALLOWED_TAGS, Text } from "../Text";

import styles from './Input.module.css'
import { InputProps } from './types'

const Input = ({ className, hasError, errorMessage, name, onFocus, onBlur, ...rest }: InputProps ) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null);


  const inputWrapperClass = classnames(styles.Input, isFocused && styles.isFocused, hasError && styles.hasError)

  const handleInputAreaClick = useCallback(() => {
    if (inputRef?.current) inputRef.current.focus();
  }, []);

    return (
        
          <div className={styles.inputArea} onClick={handleInputAreaClick}>
            <input className={inputWrapperClass} name={name} {...rest} />
          
            {hasError && errorMessage && (
                <Text
                className={styles.InputErrorMessage}
                tag={ALLOWED_TAGS.SPAN}
              >
                {errorMessage}
              </Text>
            )}
        </div>
    )
}

export default Input