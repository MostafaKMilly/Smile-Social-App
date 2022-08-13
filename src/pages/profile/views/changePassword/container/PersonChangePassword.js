import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useChangeUserPassword } from "../hooks";
import { useSelector } from "react-redux";

function PersonChangePassword() {
  const [changePassword] = useChangeUserPassword();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { id } = useSelector((state) => state.user.info);

  const handleChangePassword = (data) => {
    changePassword({ variables: { ...data, id } });
  };

  return (
    <Box mt={2}>
      <Typography color="primary" fontSize="16px" fontWeight={600}>
        تعديل كلمة السر :
      </Typography>
      <Box
        mt={4}
        mb={9}
        component="form"
        onSubmit={handleSubmit(handleChangePassword)}
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
          maxWidth: "400px",
        }}
      >
        <Controller
          name="oldPassword"
          control={control}
          rules={{
            required: "كلمة السر القديمة مطلوبة",
            minLength: {
              value: 7,
              message: "كلمة السر يجب ان تكون اكثر من 7 محارف",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              required
              type="password"
              label="كلمة السر القديمة"
              error={errors.oldPassword ? true : false}
              helperText={errors.oldPassword?.message}
              variant="outlined"
            />
          )}
        />
        <Controller
          name="newPassword1"
          control={control}
          rules={{
            required: "كلمة السر الجديدة مطلوبة",
            minLength: {
              value: 7,
              message: "كلمة السر يجب ان تكون اكثر من 7 محارف",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              required
              type="password"
              label="كلمة السر الجديدة"
              error={errors.newPassword1 ? true : false}
              helperText={errors.newPassword1?.message}
              variant="outlined"
            />
          )}
        />
        <Controller
          name="newPassword2"
          control={control}
          rules={{
            required: "كلمة السر الجديدة مطلوبة",
            minLength: {
              value: 7,
              message: "كلمة السر يجب ان تكون اكثر من 7 محارف",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              required
              type="password"
              label="اعد كتابة كلمة السر الجديدة"
              error={errors.newPassword2 ? true : false}
              helperText={errors.newPassword2?.message}
              variant="outlined"
            />
          )}
        />
        <Button fullWidth type="sumbit">
          حفظ
        </Button>
      </Box>
    </Box>
  );
}

export default PersonChangePassword;
