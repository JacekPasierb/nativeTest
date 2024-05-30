import React, { useState } from "react";
import {
  Alert,
  Button,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Circle, Path, Svg } from "react-native-svg";
import {
  BoxAvatar,
  BoxInputs,
  ButtonText,
  Container,
  Input,
  NavText,
  StyledButton,
  Title,
} from "./RegistrationScreen.styled";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const navigation = useNavigation();

  const onLogin = () => {
    Alert.alert("Credentials", `${login} + ${password}`);
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
              <BoxAvatar>
                <Svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  style={{
                    position: "absolute",
                    bottom: 14,
                    right: -12,
                  }}
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
              </BoxAvatar>
              <Title>Registration</Title>
              <BoxInputs>
                <Input
                  placeholder="Login"
                  value={login}
                  onChangeText={setLogin}
                  onFocus={() => handleFocus("login")}
                  onBlur={handleBlur}
                  isFocused={focusedField === "login"}
                />
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

              <StyledButton onPress={onLogin}>
                <ButtonText>Registration</ButtonText>
              </StyledButton>
              <NavText>
                Already have an account?
                <Text onPress={() => navigation.navigate("Login" as never)}>
                  {" "}
                  Sign in
                </Text>
              </NavText>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;
