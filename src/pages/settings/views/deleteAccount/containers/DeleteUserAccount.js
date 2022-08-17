import { Delete } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDeleteUserAccount } from "../hooks/useDeleteUserAccount";

function DeleteUserAccount(props) {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();
  const [deleteAccount] = useDeleteUserAccount();

  const handleDeleteAccount = (data) => {
    deleteAccount({ variables: data });
  };

  return (
    <Box mt={2} maxWidth="400px">
      <Typography gutterBottom fontSize="15px" color="primary">
        حذف الحساب
      </Typography>
      <Stack spacing={4} direction={"column"} component="form">
        <Controller
          control={control}
          name="email"
          label="email"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              type="email"
              label="البريد الالكتروني"
              required
              error={errors?.email ? true : false}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          label="password"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="كلمة السر"
              required
              error={errors?.password ? true : false}
            />
          )}
        />
        <Button
          icon={<Delete />}
          color="error"
          onClick={handleSubmit(handleDeleteAccount)}
        >
          حذف
        </Button>
      </Stack>
    </Box>
  );
}

export default DeleteUserAccount;
