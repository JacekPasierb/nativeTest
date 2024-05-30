import styled from "styled-components/native";

export const Container = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  align-items: left;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  border-bottom-width: 0.5px;
  border-bottom-color: #FFFFF;
  padding-top: 44px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  text-align: center;
  padding: 11px 67px;

  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #212121;
`;
