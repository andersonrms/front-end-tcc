import React from 'react'
import Image from 'next/image'

import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.Header}>
            <Image 
                src='/assets/logo.svg'
                alt='Logo'
                width={50}
                height={50}
                loading="lazy"
            />
        </header>
    )
}

export default Header