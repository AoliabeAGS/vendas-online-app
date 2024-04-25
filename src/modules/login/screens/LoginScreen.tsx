import { useState } from 'react';

import { Button } from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/input';
import { useRequests } from '../../../shared/hooks/useRequests';
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
    const { postRequest, loading } = useRequests();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setemail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        postRequest('http://localhost:3000/login', { email, password });
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
                    <Button
                        type="primary"
                        margin="34px 0px 16px 0px"
                        onClick={handleLogin}
                        loading={loading}
                    >
                        Entrar
                    </Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
};

export default LoginScreen;
