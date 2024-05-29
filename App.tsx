import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Siemka Jacob!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <RegistrationScreen />
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
