import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import {
  BoxInputs,
  Button,
  ButtonText,
  Container,
  Input,
  NavText,
  Title,
} from "./LoginScreen.styled";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const onLogin = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
  };

  const handleFocus = (field: string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField("");
  };
  return (
    <ImageBackground
      source={require("../../../assets/Photo.jpg")}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            keyboardShouldPersistTaps="handled"
          >
            <Container>
              <Title>Sign in</Title>
              <BoxInputs>
                <Input
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  isFocused={focusedField === "email"}
                />
                <Input
                  secureTextEntry={true}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => handleFocus("password")}
                  onBlur={handleBlur}
                  isFocused={focusedField === "password"}
                />
              </BoxInputs>

              <Button onPress={onLogin}>
                <ButtonText>Login</ButtonText>
              </Button>
              <NavText>Don't have an account? Register now</NavText>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;
