import React from 'react'
import Image from 'next/image'

import { Button, BUTTON_MODIFIERS } from '../components/Button'
import { Input } from '../components/Input'
import { Text } from '../components/Text'

import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.Container}>
            <div>
                <Image 
                    alt="Logo"
                    src="/assets/logo.svg"
                    width={150}
                    height={150}
                    loading="lazy"
                />
                <Text>Sistema para controle de pedidos</Text>
            </div>

            <div className={styles.box}>
                <form action="">
                    <Input placeholder='Digite o seu email' />
                    <Input placeholder='Senha' />

                    <Button className={styles.SignInButton} modifier={BUTTON_MODIFIERS.PRIMARY} type='submit'>Entrar</Button>
                </form>
                <Button className={styles.PasswordForget} modifier={BUTTON_MODIFIERS.TERTIARY} type='submit'>Esqueceu sua senha?</Button>

                <div role="separator" className={styles.Divider} />

                <footer>
                    <Button className={styles.RegisterUser} modifier={BUTTON_MODIFIERS.SUPPORT} type='submit'>Criar nova conta</Button>
                </footer>
            </div>
        </div>
    )
}

export default Login