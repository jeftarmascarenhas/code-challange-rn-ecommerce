import React from "react";
import { Text } from "react-native";

import { logo } from "../../utils/images";

import * as S from "./styled";

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Logo source={logo} />
    </S.Header>
  );
};

export default Header;
