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
                    <Input title="Usuário" />
                    <Input title="Senha" />
                    <Button type="primary" margin="34px 0px 16px 0px">
                        Entrar
                    </Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    );
};

export default LoginScreen;
