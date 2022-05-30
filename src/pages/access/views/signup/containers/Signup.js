import {
  Avatar,
  Stack,
  Box,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <Stack p={4} spacing={8} alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center" rowGap={1}>
        <Avatar sx={{ width: 80, height: 80 }}>IT</Avatar>
      </Box>
      <Box component="form" display="flex" rowGap={4} flexDirection="column">
        <TextField label="اسم المستخدم" placeholder="ادخل اسم المستخدم" />
        <TextField
          label="البريد الالكتروني"
          type="email"
          placeholder="ادخل البريد الالكتروني"
        />
        <TextField
          type="password"
          label="كلمة السر"
          placeholder="ادخل كلمة السر"
        />
        <TextField
          type="number"
          label="الرقم الجامعي"
          placeholder="ادخل الرقم الجامعي"
        />
      </Box>
      <Box display="flex" columnGap={2}>
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
