import { Box } from "@mui/material";
import * as S from "./styles";
import { SwitchType } from "@/types";

export default function Switch({ title, ...props }: SwitchType) {
  return (
    <Box display="grid">
      <S.Label className={props.className}>{title}</S.Label>
      <S.Switch className="switch-mui" checked={props.checked} onChange={props.onChange} />
    </Box>
  );
}
