import { createAppContainer, createSwitchNavigator } from "react-navigation";
import SignInScreen from "../pages/signIn/index";
import SignUpScreen from "../pages/signUp/index";
import DashboardScreen from "../pages/dashboard/index";

export default function createAppNavigator(signedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn: {
          screen: SignInScreen
        },
        SignUp: {
          screen: SignUpScreen
        },
        Dashboard: {
          screen: DashboardScreen
        }
      },
      {
        initialRouteName: signedIn ? "Dashboard" : "SignIn"
      }
    )
  );
}
