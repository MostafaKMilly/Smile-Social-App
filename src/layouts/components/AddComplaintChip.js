import { Chip } from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";

function AddComplaintChip() {
  return (
    <Chip
      label="تسجيل شكوى"
      sx={{
        minWidth: "57px",
        padding: "8px",
        "& span": {
          display: {
            xs: "none",
            sm: "inline",
          },
          fontSize: "12px",
          fontFamily: "Cairo",
          fontWeight: "500",
        },
        "& .MuiChip-icon": {
          mr: {
            xs: 0,
            sm: "-6px",
          },
          ml: {
            xs: 0,
            sm: "5px",
          },
        },
      }}
      icon={<CreateIcon />}
    />
  );
}

export default AddComplaintChip;