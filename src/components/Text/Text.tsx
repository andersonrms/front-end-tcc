import React from 'react';
import classnames from 'classnames'
import { ALLOWED_TAGS, TextProps } from './types'

import styles from './Text.module.css'

const Text = <E extends React.ElementType = typeof ALLOWED_TAGS.P>({ children, tag, className }: TextProps<E> ) => {
    if (!children) return null;

    const Component = tag || ALLOWED_TAGS.P;

    const DynamicClassNames = classnames(styles.Text, className);

    return (
        <Component className={DynamicClassNames}>{children}</Component>
    )
}

export default Text