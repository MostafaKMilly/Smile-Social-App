import { createTheme } from "@mui/material";

export const primaryColor = {
  main: "#31d638",
  light: "#74ff6b",
  dark: "#00a300",
};

export const secondaryColor = {
  main: "#201f1f",
  light: "#474646",
  dark: "#000000",
};

export const fontColor = "#302D2D";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      ...primaryColor,
    },
    secondary: {
      ...secondaryColor,
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Cairo",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      color: fontColor,
    },
  },
  components: {
    MuiListItemText: {
      styleOverrides: {
        root: {
          "& span": {
            fontSize: "14px",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "&": {
          scrollbarWidth: "thin",
          scrollbarColor: "#bfbfbf transparent",
        },
        "&::-webkit-scrollbar": {
          width: "7px",
          height: "7px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
          borderRadius: "20px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#bfbfbf",
          borderRadius: "20px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          ":hover": {
            backgroundColor: "#d5fad7",
          },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "50px",
          color: "white",
          fontWeight: "bold",
          paddingTop: "8px",
          paddingBottom: "8px",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "standard",
        fullWidth: true,
        focused: true,
      },
      styleOverrides: {
        root: {
          borderColor: "#31d638",
          "& .MuiInputBase-formControl": {
            fontSize: "13px",
            fontWeight: 400,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: "15px",
          color: `${fontColor} !important`,
        },
      },
    },
  },
});
