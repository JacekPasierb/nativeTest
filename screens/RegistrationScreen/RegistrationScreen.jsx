import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Circle, Path, Svg } from "react-native-svg";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    Alert.alert("Credentials", `${login} + ${password}`);
  };
  return (
    <ImageBackground
      source={require("../../assets/Photo.jpg")}
      style={styles.registerScreen}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.boxAvatar}>
            <Svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={styles.icon}
            >
              <Circle
                cx="12.5"
                cy="12.5"
                r="12"
                fill="white"
                stroke="#FF6C00"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                fill="#FF6C00"
              />
            </Svg>
          </View>
          <Text style={styles.title}>Registration</Text>

          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          
            style={styles.inputBox}
          >
            <TextInput
              placeholder="Login"
              value={login}
              onChangeText={setLogin}
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Registration</Text>
          </TouchableOpacity>
          <Text style={styles.textNav}>Already have an account? Sign in</Text>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  registerScreen: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    position: "absolute",
    bottom: 0,

    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  boxAvatar: {
    position: "absolute",
    top: -50,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },

  inputBox: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    padding: 16,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#F6F6F6",
    backgroundColor: "#F6F6F6",
    marginBottom: 10,
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    color: "#212121",
  },
  button: {
    marginTop: 43,
    width: "100%",
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  textNav: {
    marginTop: 16,
    marginBottom: 45,
    fontSize: 16,
    color: "#1B4371",
  },
});

export default RegistrationScreen;
