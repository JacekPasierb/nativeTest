import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import {
  BoxInputs,
  ButtonText,
  Container,
  Input,
  NavText,
  StyledButton,
  Title,
} from "./LoginScreen.styled";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigationTypes";

type RegistrationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState("");
  const navigation = useNavigation<RegistrationScreenNavigationProp>();

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert("Enter all data pleace!!!");
      return;
    }
    navigation.navigate('Home', { screen: 'PostsScreen' });
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

              <StyledButton onPress={onLogin}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <NavText>
                Don't have an account?{" "}
                <Text onPress={() => navigation.navigate("Registration")}>
                  Register now
                </Text>
              </NavText>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;
