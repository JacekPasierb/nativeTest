import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #ffffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;

  width: 100%;
  margin-top: 70px;
`;

export const BoxAvatar = styled.View`
  position: absolute;
  top: -50px;
  width: 120px;
  height: 120px;
  background-color: #f6f6f6;
  border-radius: 16px;
`;

export const Title = styled.Text`
  margin-top: 92px;
  margin-bottom: 32px;
  font-size: 30px;
  color: #212121;
`;

export const BoxInputs = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Input = styled.TextInput<{ isFocused: boolean }>`
  width: 100%;
  height: 50px;
  padding: 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props) => (props.isFocused ? "#FF6C00" : "#f6f6f6")};
  background-color: ${(props) => (props.isFocused ? "##FFFFFF" : "#f6f6f6")};
  margin-bottom: 10px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 43px;
  width: 100%;
  padding: 16px;
  border-radius: 100px;
  background-color: #ff6c00;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

export const NavText = styled.Text`
  margin-top: 16px;
  margin-bottom: 45px;
  font-size: 16px;
  color: #1b4371;
`;
