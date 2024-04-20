import axios from 'axios';
import { useState } from 'react';

import { Button } from '../../../shared/buttons/button/button';
import Input from '../../../shared/inputs/input/input';
import {
    Background,
    ContainerLogin,
    ContainerLoginScreen,
    LimitedContainer,
    LogoImage,
    Titlelogin,
} from '../stykes/loginScreen.styles';

const LoginScreen = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setemail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/auth',
            data: {
                email: email,
                password: password,
            },
        })
            .then((result) => {
                alert(`Fez login ${result.data.accessToken}`);
                return result.data;
            })
            .catch(() => {
                alert('Usuário ou senha inválido');
            });
    };
    return (
        <ContainerLoginScreen>
            <Background src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.jpg" />
                    <Titlelogin level={2} type="secondary">
                        {' '}
                        LOGIN{' '}
                    </Titlelogin>
                    <Input
                        title="Usuário"
                        margin="20px 0px 0px "
                        onChange={handleEmail}
                        value={email}
                    />
                    <Input
                        type="password"
                        title="Senha"
                        margin="20px 0px 0px "
                        onChange={handlePassword}
                        value={password}
                    />
                    <Button type="primary" margin="34px 0px 16px 0px" onClick={handleLogin}>
                        Entrar
                    </Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
};

export default LoginScreen;
