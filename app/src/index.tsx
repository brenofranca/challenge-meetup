import React, { useEffect, useState } from "react";
import { AsyncStorage, StatusBar } from "react-native";
import { Provider } from "react-redux";
import createAppNavigator from "./routes/index";
import NavigationService from "./services/navigation";
import store from "./store";

export default function App() {
  const [checked, setChecked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function _loadCredentials() {
      const credentials = await AsyncStorage.getItem("@Meetup:token");

      if (credentials) {
        setAuthenticated(true);
      }

      setChecked(true);
    }

    _loadCredentials();
  }, [authenticated]);

  if (!checked) {
    return null;
  }

  const Routes = createAppNavigator(authenticated);

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
