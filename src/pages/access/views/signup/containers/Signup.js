import {
  Avatar,
  Stack,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Signup() {
  return (
    <Stack p={4} spacing={8} alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center" rowGap={1}>
        <Avatar>IT</Avatar>
        <Typography fontWeight={500} fontSize="18px">
          تسجيل حساب
        </Typography>
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
      <Box display="flex" columnGap={3}>
        <Button fullWidth>تسجيل حساب</Button>
        <Button fullWidth endIcon={<ChevronLeftIcon />} color="secondary">
          تسجيل دخول
        </Button>
      </Box>
    </Stack>
  );
}

export default Signup;
