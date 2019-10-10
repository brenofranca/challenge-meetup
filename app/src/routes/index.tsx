import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import DashboardScreen from "../pages/dashboard/index";
import InscriptionScreen from "../pages/inscription/index";
import ProfileScreen from "../pages/profile/index";
import SignInScreen from "../pages/signIn/index";
import SignUpScreen from "../pages/signUp/index";

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: DashboardScreen,
      navigationOptions: {
        tabBarLabel: "Meetups",
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name="list"
            size={40}
            color={
              focused ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)"
            }
          />
        )
      }
    },
    Inscriptions: {
      screen: InscriptionScreen,
      navigationOptions: {
        tabBarLabel: "Inscrições",
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name="local-offer"
            size={35}
            color={
              focused ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)"
            }
          />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "Meu perfil",
        tabBarIcon: ({ focused }) => (
          <MaterialIcons
            name="person"
            size={35}
            color={
              focused ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)"
            }
          />
        )
      }
    }
  },
  {
    order: ["Home", "Inscriptions", "Profile"],
    tabBarOptions: {
      activeTintColor: "#FFF",
      inactiveTintColor: "rgba(255, 255, 255, 0.6)",
      style: {
        height: 75,
        paddingTop: 10,
        backgroundColor: "#2B1A2F"
      },
      labelStyle: {
        fontSize: 18
      }
    }
  }
);

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
          screen: BottomTabNavigator
        }
      },
      {
        initialRouteName: signedIn ? "Dashboard" : "SignIn"
      }
    )
  );
}
