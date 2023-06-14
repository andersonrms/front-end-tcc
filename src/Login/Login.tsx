import React from 'react'
import { Input } from '../components/Input'
import { Text } from '../components/Text'

import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.Container}>
            <div>
                <Text tag='h2'>Grafica Rapida</Text>
            </div>

            <div className={styles.box}>
                <form action="">
                    <Input placeholder='Digite o seu email' />
                    <Input placeholder='Senha' />
                </form>
            </div>
        </div>
    )
}

export default Login