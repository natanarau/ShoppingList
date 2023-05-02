import Protected from "@/layout/Protected";
import { Box } from "@mui/material";
import ChartList from "@/Components/ChartList";
import CardInfo from "@/Components/CardInfo";

export default function Home() {
  return (
    <Protected>
      <CardInfo />
      <Box width="60vw" height="60vh">
        <ChartList />
      </Box>
    </Protected>
  );
}
