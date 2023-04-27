import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ListProps } from "@/types";

export default function Lists({ data }: ListProps) {
  const [expandedIds, setExpandedIds] = React.useState<any[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => setExpandedIds(data.map((e: any) => e.id)), [data]);

  const handleChange = (id: any) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(
        expandedIds.filter((expandedId: any) => expandedId !== id)
      );
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <Box display="grid" alignContent="space-between" height="100vh">
      <Box display="grid" gap="10px">
        {data.slice(startIndex, endIndex).map((e) => (
          <Accordion
            key={e.id}
            expanded={expandedIds.includes(e.id)}
            id={e.id}
            sx={{ backgroundColor: "grey.800" }}
            onChange={() => handleChange(e.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography typography="h6" fontWeight={700}>
                {e.listName}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box display="flex" justifyContent="space-between">
                <Box display="grid">
                  <Typography fontWeight={700}>Valor das compras</Typography>
                  <Typography>R$ 25,50</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700}>Mercado</Typography>
                  <Typography>{e.marketplace}</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={700}>Data</Typography>
                  <Typography>{e.formattedDate}</Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      {data.length > 0 && (
        <Stack spacing={2} alignItems="center">
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      )}
    </Box>
  );
}
