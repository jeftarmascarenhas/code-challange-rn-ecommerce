import React from "react";

import { Header, BannerText } from "../../components";

import * as S from "./styled";
import ProductList from "./components/ProductList";

const NewReleases: React.FC = () => {
  return (
    <S.NewReleases>
      <Header />
      <BannerText
        text="Free Shipping & 30-Day Free Returns"
        onPress={(): void => alert(1)}
      />
      <ProductList title="THIS MONTH" />
      <ProductList title="WEMEN’S FAVORITES" />
    </S.NewReleases>
  );
};

export default NewReleases;
