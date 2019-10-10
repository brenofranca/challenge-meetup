import React, { useState, useEffect } from "react";
import createAppNavigator from "./routes/index";
import { AsyncStorage } from "react-native";

export default function App() {
  const [checked, setChecked] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function _loadCredentials() {
      const credentials = await AsyncStorage.getItem("@Meetup:crendentials");

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

  return <Routes />;
}
