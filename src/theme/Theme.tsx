import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  typography: {
    fontFamily: "LeagueSpartanRegular, Arial, sans-serif",
    textBold: {
      fontFamily: "LeagueSpartanBold, Arial, sans-serif",
      lineHeight: "1.2rem",
    },
    textRegular: {
      fontFamily: "LeagueSpartanRegular, Arial, sans-serif",
      lineHeight: "1.2rem",
    },
    textLight: {
      fontFamily: "LeagueSpartanLight, Arial, sans-serif",
      lineHeight: "1.2rem",
    },
    textMedium: {
      fontFamily: "LeagueSpartanMedium, Arial, sans-serif",
      lineHeight: "1.2rem",
    },
    h1: {
      fontFamily: "LeagueSpartanBold, Arial, sans-serif",
      lineHeight: "normal",
    },
  },
  palette: {
    red: {
      main: "#A0153E",
      light: "#FF204E",
      dark: "#5D0E41",
      contrastText: "#00224D",
    },
    violet: {
      main: "#720455",
      light: "#910A67",
      dark: "#3C0753",
      contrastText: "#030637",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "custom" },
          style: {
            backgroundColor: "#E6CC82",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#9C6644",
            },
          },
        },
      ],
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "custom" && {
            "&.MuiButton-sizeSmall": {
              fontSize: "0.75rem",
              padding: "24px 8px",
            },
            "&.MuiButton-sizeMedium": {
              fontSize: "1rem",
              padding: "46px 12px",
            },
            "&.MuiButton-sizeLarge": {
              fontSize: "1.25rem",
              padding: "88px 16px",
            },
          }),
        }),
      },
    },
  },
});

export default Theme;
