import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Delete } from "@mui/icons-material";
import AuthComponent from "../../../../../common/components/AuthComponent";

function QuizPost({ question, answer, subject, publishDate, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined" sx={{ mb: 5 }}>
      <CardHeader
        sx={{ alignItems: "flex-start" }}
        action={
          <AuthComponent hide={"Student_"}>
            <IconButton color="error" onClick={onDelete}>
              <Delete />
            </IconButton>
          </AuthComponent>
        }
        title={
          <Typography fontSize={"15px"} fontWeight={500}>
            {subject}
          </Typography>
        }
        subheader={
          <Box>
            <Box display="flex" columnGap={1} alignItems="center">
              <CalendarTodayIcon
                sx={{ fontSize: "12px" }}
                color="textSecondary"
              />
              <Typography color="textSecondary" fontSize="14px">
                {publishDate.split("T")[0]}
              </Typography>
            </Box>
          </Box>
        }
      />

      <CardContent>
        <Typography variant="body2" color="text.primary">
          {question}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "center", my: 0.5 }}>
        <Accordion
          defaultExpanded={false}
          sx={{ background: "none", width: "100%", p: 1 }}
          elevation={0}
          disableGutters
          expanded={expanded}
          onChange={() => handleExpand()}
        >
          <AccordionSummary
            sx={{
              background: "none",
              border: (theme) => `1px solid ${theme.palette.text.secondary}`,
              "& *": {
                justifyContent: "center",
              },
            }}
          >
            <Box display="flex" columnGap={1}>
              <Typography>الجواب</Typography>
              {!expanded && <ArrowDownwardIcon />}
              {expanded && <ArrowUpwardIcon />}
            </Box>
          </AccordionSummary>
          <AccordionDetails>{answer}</AccordionDetails>
        </Accordion>
      </CardActions>
    </Card>
  );
}

export default QuizPost;
