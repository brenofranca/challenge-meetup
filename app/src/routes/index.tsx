import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SignInScreen from "../pages/signIn/index";
import SignUpScreen from "../pages/signUp/index";

const AppNavigator = createSwitchNavigator({
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
});

export default createAppContainer(AppNavigator);
