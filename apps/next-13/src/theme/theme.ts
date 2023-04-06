import { createTheme, responsiveFontSizes } from "@mui/material";

export const appTheme = responsiveFontSizes(
  createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
          },
        },
      },
    },
    typography: {
      fontFamily: [
        "Comfortaa-Regular",
        "Comfortaa-Regular",
        "Roboto",
        "sans-serif",
      ].join(","),
      button: {
        textTransform: "none",
      },
    },
    palette: {
      text: {
        primary: "#130f28",
      },
      primary: {
        main: "#130f28",
      },
      secondary: {
        main: "#00c2cf",
      },
    },
  })
);
