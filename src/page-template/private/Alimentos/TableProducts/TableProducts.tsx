import * as S from "./styles";

export default function TableProduct() {
  const data = [
    {
      id: 1,
      productName: "Arroz integral",
      productBrand: "Tio João",
      productValue: 10.5,
    },
    {
      id: 1,
      productName: "Macarrão Espaguete",
      productBrand: "Vitarela",
      productValue: 4.85,
    },
  ];

  return (
    <S.Session>
        <S.Wrapper height='70px'>
          <S.ItemsTitles>Cod</S.ItemsTitles>
          <S.ItemsTitles>Nome do Produto</S.ItemsTitles>
          <S.ItemsTitles>Preço do Produto</S.ItemsTitles>
          <S.ItemsTitles>Marca</S.ItemsTitles>
          <S.ItemsTitles>Ação</S.ItemsTitles>
        </S.Wrapper>
        <S.Wrapper>
          <S.Items>1</S.Items>
          <S.Items>Produto teste</S.Items>
          <S.Items>R$ 40,50</S.Items>
          <S.Items>Marca teste</S.Items>
          <S.Items>/ X</S.Items>
        </S.Wrapper>
        <S.Wrapper>
          <S.Items>1</S.Items>
          <S.Items>Produto teste</S.Items>
          <S.Items>R$ 40,50</S.Items>
          <S.Items>Marca teste</S.Items>
          <S.Items>/ X</S.Items>
        </S.Wrapper>
        <S.Wrapper>
          <S.Items>1</S.Items>
          <S.Items>Produto teste</S.Items>
          <S.Items>R$ 40,50</S.Items>
          <S.Items>Marca teste</S.Items>
          <S.Items>/ X</S.Items>
        </S.Wrapper>
        <S.Wrapper>
          <S.Items>1</S.Items>
          <S.Items>Produto teste</S.Items>
          <S.Items>R$ 40,50</S.Items>
          <S.Items>Marca teste</S.Items>
          <S.Items>/ X</S.Items>
        </S.Wrapper>
    </S.Session>
  );
}
