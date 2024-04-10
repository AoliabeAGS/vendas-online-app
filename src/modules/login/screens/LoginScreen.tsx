import Input from '../../../shared/inputs/input/input';
import {
  Background,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from '../stykes/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <Background src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.jpg" />
          <Input title='Usuário' />
          <Input title='Senha' />
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
