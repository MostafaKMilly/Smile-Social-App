import { Box, Button, Link, Stack, TextField } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../../../common/components";

function Login() {
  const navigate = useNavigate();
  const handleLoginIn = () => {
    navigate("/");
    localStorage.setItem("token", "test");
  };
  return (
    <Stack p={4} spacing={10} alignItems="center">
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
        <TextField
          label="اسم المستخدم"
          placeholder="ادخل اسم المستخدم"
          focused
        />
        <TextField
          type="password"
          label="كلمة السر"
          placeholder="ادخل كلمة السر"
          focused
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
        <Button fullWidth onClick={handleLoginIn}>
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
