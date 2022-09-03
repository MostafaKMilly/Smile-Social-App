import { Add } from "@mui/icons-material";
import { Button, Container, Box, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { GenericDialog } from "../../../common/components";
import { useMarksColumns } from "../../lectures/hooks/useMarksColumns";
import { ROWS } from "../constants";
import _ from "lodash";

function MyMarks() {
  const [open, setOpen] = useState();
  const [file, setFile] = useState();
  const [rows, setRows] = useState(ROWS);
  const columns = useMarksColumns();

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ maxWidth: "730px", mt: 2, pb: 4 }}
    >
      <Button color="primary" startIcon={<Add />} onClick={() => setOpen(true)}>
        اضافة علامات
      </Button>
      <GenericDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="اضافة ملف علامات"
        actionLabel="حفظ"
        content={
          <Box component="form" display="flex" rowGap={2}>
            <TextField
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Box>
        }
        onSubmit={() => {
          setOpen(false);
          setRows([
            ...rows,
            {
              id: _.uniqueId(),
              subjectName: "Linear algabra",
              therotical: "Therotical",
              theroticalValue: "30",
              partical: "Partical",
              particalValue: "40",
              total: "70",
            },
          ]);
        }}
      />
      <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
        <Box display="flex" height="100%">
          <Box sx={{ flexGrow: 1 }}>
            <DataGrid columns={columns} rows={rows} />
          </Box>
        </Box>
      </div>
    </Container>
  );
}

export default MyMarks;
