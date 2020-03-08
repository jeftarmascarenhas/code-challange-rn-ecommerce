import React from "react";
import { ScrollView, Alert } from "react-native";

import { productImg1 } from "../../../../utils/images";

import * as S from "./styled";

interface Props {
  title: string;
}

const fakeData: { id: number; image: any }[] = [
  {
    id: 1,
    image: productImg1
  },
  {
    id: 2,
    image: productImg1
  },
  {
    id: 3,
    image: productImg1
  },
  {
    id: 4,
    image: productImg1
  },
  {
    id: 5,
    image: productImg1
  }
];

const ProductList: React.FC<Props> = ({ title }: Props) => {
  return (
    <S.ProductList>
      <S.Title>{title}</S.Title>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {fakeData.map(product => (
          <S.ProductItem
            key={product.id}
            onPress={(): void =>
              Alert.alert("Info", `Product: ${product.id}`, [
                {
                  text: "Go Product Details",
                  onPress: () => console.log("Ask me later pressed")
                }
              ])
            }
          >
            <S.ProductImage source={product.image} />
          </S.ProductItem>
        ))}
      </ScrollView>
    </S.ProductList>
  );
};

export default ProductList;
