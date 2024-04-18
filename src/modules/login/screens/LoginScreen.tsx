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
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
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
                        onChange={handleUserName}
                        value={userName}
                    />
                    <Input
                        type="password"
                        title="Senha"
                        margin="20px 0px 0px "
                        onChange={handlePassword}
                        value={password}
                    />
                    <Button type="primary" margin="34px 0px 16px 0px">
                        Entrar
                    </Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
};

export default LoginScreen;
