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
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
