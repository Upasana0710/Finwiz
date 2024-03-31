import React from "react";
import { TouchableOpacity, ActivityIndicator, View, Text } from "react-native";
import styled, { css } from "styled-components/native";

const Card = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const CardIcon = styled.View`
  width: 58px;
  height: 58px;
  justify-content: center;
  align-items: center;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 60px;
`;
const CardText = styled.Text`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;
const NavigationCards = ({ data }) => {
  return (
    <Card>
      <CardIcon background={data.background} color={data.color}>
        {data.icon}
      </CardIcon>
      <CardText>{data.text}</CardText>
    </Card>
  );
};

export default NavigationCards;
