import React from 'react';
import { CloseRounded } from '@mui/icons-material';

import { Modal } from '@/src/components/Modal';
import { Text } from '@/src/components/Text';
import Divider from '@/src/components/Divider';
import { Input } from '@/src/components/Input';
import { Button } from '@/src/components/Button';

import styles from './Register.module.css';
import { useForm } from 'react-hook-form';
import { validateRegisterFormType, validateRegisterFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<validateRegisterFormType>({
    resolver: zodResolver(validateRegisterFormSchema),
  });

  const handleRegisterUser = (data: validateRegisterFormType) => {
    console.log(data);
  };

  return (
    <Modal>
      <header className={styles.RegisterModalHeader}>
        <div>
          <Text tag="h2">Cadastre-se</Text>
          <CloseRounded />
        </div>
        <Text tag="span">É rápido e fácil.</Text>
      </header>
      <Divider />
      <form onSubmit={handleSubmit(handleRegisterUser)}>
        <Input
          id="name-input"
          aria-required
          placeholder="Nome"
          type="text"
          hasError={errors && !!errors.name?.message}
          errorMessage={errors.name?.message}
          {...register('name')}
        />
        <Input
          id="email"
          aria-required
          placeholder="E-mail"
          type="email"
          hasError={errors && !!errors.email?.message}
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <Input
          id="cpf"
          aria-required
          placeholder="CPF ou CNPJ"
          type="text"
          hasError={errors && !!errors.cpf?.message}
          errorMessage={errors.cpf?.message}
          {...register('cpf')}
        />
        <Input
          id="phone"
          aria-required
          placeholder="Celular"
          type="text"
          hasError={errors && !!errors.phone?.message}
          errorMessage={errors.phone?.message}
          {...register('phone')}
        />
        <Input
          id="Addres"
          aria-required
          placeholder="Endereço"
          type="text"
          hasError={errors && !!errors.address?.message}
          errorMessage={errors.address?.message}
          {...register('address')}
        />
        <footer className={styles.RegisterModalFooter}>
          <Text tag="p">
            Ao clicar em Cadastre-se, você concorda com nossos{' '}
            <span>Termos, Política de Privacidade</span> e{' '}
            <span>Política de Cookies</span>.
          </Text>
          <Button
            type="submit"
            className={styles.RegisterButton}
            modifier="positive"
          >
            Cadastre-se
          </Button>
        </footer>
      </form>
    </Modal>
  );
};

export default Register;

/* 
    "name": "Anderson ",
	"email": "andersonrms15@gmail.com",
	"cpf": "15686771708",
	"address": "Rua Alquindar, n 769",
	"phone": "964843927"

*/
