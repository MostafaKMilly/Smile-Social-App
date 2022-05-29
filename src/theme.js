import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#31d638",
      light: "#74ff6b",
      dark: "#00a300",
    },
    secondary: {
      main: "#201f1f",
      light: "#474646",
      dark: "#000000",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Cairo",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "50px",
          color: "white",
          fontWeight: "bold",
        },
      },
    },
  },
});
