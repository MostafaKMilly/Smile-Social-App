import { Stack, Box, TextField, Button } from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../../../common/components";

function Signup() {
  const navigate = useNavigate();
  return (
    <Stack p={4} spacing={8} alignItems="center">
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
        <TextField
          label="اسم المستخدم"
          placeholder="ادخل اسم المستخدم"
          focused
        />
        <TextField
          label="البريد الالكتروني"
          type="email"
          placeholder="ادخل البريد الالكتروني"
          focused
        />
        <TextField
          type="password"
          label="كلمة السر"
          placeholder="ادخل كلمة السر"
          focused
        />
        <TextField
          type="number"
          label="الرقم الجامعي"
          placeholder="ادخل الرقم الجامعي"
          focused
        />
      </Box>
      <Box display="flex" columnGap={2} sx={{ width: "100%" }}>
        <Button fullWidth>تسجيل حساب</Button>
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
