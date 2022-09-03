import { Box, Typography } from "@mui/material";
import React from "react";
import LectureTreeView from "../components/LectureTreeView";

function Lectures() {
  return (
    <Box mb={2}>
      <Typography fontSize="17px" fontWeight={600} color="primary.main">
        المحاضرات
      </Typography> 
      <LectureTreeView />
    </Box>
  );
}

export default Lectures;
