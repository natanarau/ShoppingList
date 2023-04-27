import { Box, InputBaseProps } from "@mui/material";
import * as S from "./styles";

export const Input = ({
  title,
  placeholder,
  type,
  value,
  onChange,
  ...props
}: InputBaseProps) => {
  return (
    <>
      <Box display="grid" gap={1} width="100%">
        <S.Label className={props.className}>{title}</S.Label>
        <S.Input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />
      </Box>
    </>
  );
};
