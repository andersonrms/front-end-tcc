"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, BUTTON_MODIFIERS } from "../components/Button";
import { Input } from "../components/Input";
import { ALLOWED_TAGS, Text } from "../components/Text";

import styles from "./Login.module.css";
import { validateLoginFormType, validateLoginFormSchema } from "./schema";
import { LOGIN_URL } from "../helpers";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<validateLoginFormType>({
    resolver: zodResolver(validateLoginFormSchema),
  });

  const handleLoginUser = async (data: validateLoginFormType) => {
    const response = await fetch(LOGIN_URL, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
    })

    const cookie = response.headers.get('Set-Cookie');
    console.log(cookie)
  };

  return (
    <div className={styles.Container}>
      <aside>
        <Image
          alt="Logo"
          src="/assets/logo.svg"
          width={150}
          height={150}
          priority
          loading="eager"
        />
        <Text className={styles.AsideTitle} tag={ALLOWED_TAGS.H2}>
          Sistema para controle de pedidos
        </Text>
      </aside>

      <div className={styles.LoginBox}>
        <form onSubmit={handleSubmit(handleLoginUser)}>
          <Input
            id="email-input"
            aria-required
            placeholder="Digite o seu email"
            type="email"
            hasError={errors && !!errors.email?.message}
            errorMessage={errors.email?.message as string}
            {...register("email")}
          />
          <Input
            id="password-input"
            placeholder="Digite sua senha"
            type="password"
            hasError={errors && !!errors.password?.message}
            errorMessage={errors.password?.message as string}
            {...register("password")}
          />

          <Button
            id="btn-user-login"
            className={styles.SignInButton}
            modifier={BUTTON_MODIFIERS.PRIMARY}
            type="submit"
          >
            Entrar
          </Button>
        </form>
        <Button
          id="btn-new-account"
          className={styles.PasswordForget}
          modifier={BUTTON_MODIFIERS.TERTIARY}
          type="button"
        >
          Esqueceu sua senha?
        </Button>

        <div role="separator" className={styles.Divider} />

        <footer>
          <Button
            className={styles.RegisterUser}
            modifier={BUTTON_MODIFIERS.SUPPORT}
            type="submit"
          >
            Criar nova conta
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default Login;
