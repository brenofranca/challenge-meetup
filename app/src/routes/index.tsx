import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SignInScreen from "../pages/signIn/index";

const AppNavigator = createSwitchNavigator({
  SignIn: {
    screen: SignInScreen
  }
});

export default createAppContainer(AppNavigator);
