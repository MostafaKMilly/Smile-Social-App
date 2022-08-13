import { Stack, Box, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../../../common/components";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { SIGNUP_QUERY } from "../queries";
import { AUTH_TOKEN } from "../../../../../constants";
import { useLocalStorage } from "../../../../../common/hooks";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../../../../data/slices/userSlice";

function Signup() {
  const navigate = useNavigate();
  const [errorMess, setErrMess] = useState();
  const [, setToken] = useLocalStorage(AUTH_TOKEN, "");
  const dispatch = useDispatch();

  const [signup] = useMutation(SIGNUP_QUERY, {
    onCompleted: ({ signup }) => {
      setToken(signup.token);
      dispatch(addUserInfo(signup.token));
      navigate("/");
    },
    onError: (error) => {
      setErrMess(error.message);
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSigup = (data) => {
    signup({ variables: data });
  };

  return (
    <Stack
      p={4}
      justifyContent="space-between"
      sx={{ height: "100%" }}
      alignItems="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={1}
        sx={{ width: "100%" }}
      >
        <Logo />
      </Box>
      <Box
        component="form"
        display="flex"
        rowGap={4}
        flexDirection="column"
        sx={{ width: "100%" }}
      >
        {errorMess && (
          <Typography
            gutterBottom
            color="error"
            float="left"
            fontSize="12px"
            fontWeight="600"
            sx={{ direction: "rtl" }}
          >
            {"- " + errorMess}
          </Typography>
        )}
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "الاسم الاول مطلوب" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="الاسم الاول"
              required
              error={errors.firstName ? true : false}
              helperText={errors.firstName?.message}
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "الكنية مطلوبة" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="الكنية"
              required
              error={errors.lastName ? true : false}
              helperText={errors.lastName?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: "البريد الالكتروني مطلوب" }}
          render={({ field }) => (
            <TextField
              {...field}
              label="البريد الالكتروني"
              type="email"
              required
              error={errors.email ? true : false}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          required
          rules={{
            required: "كلمة السر مطلوبة",
            minLength: {
              value: 7,
              message: "كلمة السر يجب ان تكون اكثر من 7 محارف",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label="كلمة السر"
              required
              error={errors.password ? true : false}
              helperText={errors.password?.message}
            />
          )}
        />
      </Box>
      <Box display="flex" columnGap={2} sx={{ width: "100%" }}>
        <Button fullWidth onClick={handleSubmit(onSigup)}>
          تسجيل حساب
        </Button>
        <Button
          fullWidth
          endIcon={<ChevronLeftIcon />}
          color="secondary"
          onClick={() => navigate("/access/login")}
        >
          تسجيل دخول
        </Button>
      </Box>
    </Stack>
  );
}

export default Signup;
