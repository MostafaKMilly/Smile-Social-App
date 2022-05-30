import {
  Avatar,
  Box,
  Button,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <Stack p={4} spacing={10} alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center" rowGap={1}>
        <Avatar sx={{ width: 80, height: 80 }}>IT</Avatar>
      </Box>
      <Box component="form" display="flex" rowGap={7} flexDirection="column">
        <TextField label="اسم المستخدم" placeholder="ادخل اسم المستخدم" />
        <TextField
          type="password"
          label="كلمة السر"
          placeholder="ادخل كلمة السر"
        />
        <Link sx={{ color: "#0B5EFF", fontSize: "12px" }} mt={-3}>
          هل نسيت كلمة السر
        </Link>
      </Box>
      <Box display="flex" flexDirection="column" rowGap={3}>
        <Button fullWidth>تسجيل دخول</Button>
        <Button fullWidth color="secondary" onClick={() => navigate("/access/signup")}>
          تسجيل حساب
        </Button>
      </Box>
    </Stack>
  );
}

export default Login;
