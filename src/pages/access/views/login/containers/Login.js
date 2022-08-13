import { useMutation } from "@apollo/client";
import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../../../common/components";
import { useLocalStorage } from "../../../../../common/hooks";
import { AUTH_TOKEN } from "../../../../../constants";
import { addUserInfo } from "../../../../../data/slices/userSlice";
import { LOGIN_QUERY } from "../queries/login";

function Login() {
  const navigate = useNavigate();
  const [errorMess, setErrMess] = useState();
  const [, setToken] = useLocalStorage(AUTH_TOKEN, "");
  const dispatch = useDispatch();

  const [login] = useMutation(LOGIN_QUERY, {
    onCompleted: ({ login }) => {
      setToken(login.token);
      dispatch(addUserInfo(login.token));
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

  const onLogin = (data) => {
    login({ variables: data });
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
        rowGap={7}
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
          name="email"
          control={control}
          rules={{ required: "البريد الالكتروني مطلوب" }}
          render={({ field }) => (
            <TextField
              {...field}
              required
              label="البريد الالكتروني"
              type="email"
              error={errors.email ? true : false}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
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
              required
              type="password"
              label="كلمة السر"
              error={errors.password ? true : false}
              helperText={errors.password?.message}
            />
          )}
        />
        <Link sx={{ color: "#0B5EFF", fontSize: "12px" }} mt={-3}>
          هل نسيت كلمة السر
        </Link>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        rowGap={3}
        sx={{ width: "100%" }}
      >
        <Button fullWidth onClick={handleSubmit(onLogin)}>
          تسجيل دخول
        </Button>
        <Button
          fullWidth
          color="secondary"
          onClick={() => navigate("/access/signup")}
        >
          تسجيل حساب
        </Button>
      </Box>
    </Stack>
  );
}

export default Login;
