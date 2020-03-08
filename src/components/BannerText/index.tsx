import React from "react";
import { View, Text } from "react-native";

import * as S from "./styled";

interface Props {
  text: string;
  onPress?: () => void;
}

const BannerText: React.FC<Props> = ({ text, onPress }: Props) => {
  return (
    <S.BannerText>
      <S.Text>{text}</S.Text>
      <S.JoinButton>
        <S.JoinButtonText onPress={onPress}>Join Now</S.JoinButtonText>
      </S.JoinButton>
    </S.BannerText>
  );
};

export default BannerText;
