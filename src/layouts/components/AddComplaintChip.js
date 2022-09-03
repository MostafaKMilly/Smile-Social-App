import { Chip, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { GenericDialog } from "../../common/components";
import { Controller, useForm } from "react-hook-form";
import { useAddComplain } from "../hooks/useAddComplain";

function AddComplaintChip() {
  const [open, setOpen] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const [addComplain] = useAddComplain();
  const handleAddComplain = (data) => {
    addComplain({
      variables: data,
      onCompleted: () => {
        reset();
        setOpen(false);
      },
    });
  };

  return (
    <>
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
        clickable
        onClick={() => setOpen(true)}
      />
      <GenericDialog
        title="تسجيل شكوى"
        isOpen={open}
        onClose={() => setOpen(false)}
        actionLabel="تسجيل"
        onSubmit={handleSubmit(handleAddComplain)}
        content={
          <Stack spacing={4} component="form">
            <Controller
              control={control}
              name="title"
              render={({ field }) => <TextField {...field} label="العنوان" />}
            />
            <Controller
              control={control}
              name="body"
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  multiline
                  rows={4}
                  {...field}
                  label="تفاصيل"
                  required
                />
              )}
            />
          </Stack>
        }
      />
    </>
  );
}

export default AddComplaintChip;
