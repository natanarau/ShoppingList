import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function SimpleAccordion() {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <div>
      <Accordion
        expanded={expanded}
        sx={{ backgroundColor: "grey.800", }}
        onClick={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography typography='h6' fontWeight={700}>Macarrão Espaguete</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" justifyContent="space-between">
            <Box display="grid">
              <Typography fontWeight={700}>Último Preço</Typography>
              <Typography>R$ 25,50</Typography>
            </Box>
            <Box>
              <Typography fontWeight={700}>Marca</Typography>
              <Typography>Virarela</Typography>
            </Box>  
            <Box>
              <Typography fontWeight={700}>Mercado</Typography>
              <Typography>Virarela</Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
