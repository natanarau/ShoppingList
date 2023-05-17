import { AutocompleteType } from "@/types";
import * as S from "./styles";
import { Box, TextField } from "@mui/material";
import theme from "@/theme/theme";
import React from "react";

export default function AutoComplete({ ...props }: AutocompleteType) {

  return (
    <Box>
      <S.Label className={props.className}>{props.label}</S.Label>
      <S.Autocomplete
        id="combo-box-demo"
        placeholder="teste"
        options={props.items}
        isOptionEqualToValue={(option: any, value: any | null) => option.id === value?.id}

        getOptionLabel={(option: any) => option.label}
        renderOption={(props, option: any) => {
          const { label } = option;
          return (
            <span
              {...props}
              style={{ color: `${theme.palette.text.secondary}` }}
              >
              {label}
            </span>
          );
        }}
        renderInput={(params) => {
          return (
            <TextField
            {...params}
            label="Escolha o mercado"
            variant="outlined"
            fullWidth
            />
            );
          }}
        {...props}
      />
    </Box>
  );
}
