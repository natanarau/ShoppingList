import { Box, InputBaseProps } from "@mui/material";
import * as S from "./styles";

export const Input = ({
  title,
  placeholder,
  type,
  value,
  onChange,
}: InputBaseProps) => {
  return (
    <>
      <Box display="grid" gap={1} width="100%">
        <S.Label>{title}</S.Label>
        <S.Input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </Box>
    </>
  );
};
