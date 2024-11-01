import "@mui/material/Button";
import React from "react";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    custom: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    red: true;
    violet: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    red: Palette["primary"];
    violet: Palette["primary"];
  }
  interface PaletteOptions {
    red?: PaletteOptions["primary"];
    violet?: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    textRegular: React.CSSProperties;
    textBold: React.CSSProperties;
    textLight: React.CSSProperties;
    textMedium: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    textRegular?: React.CSSProperties;
    textBold?: React.CSSProperties;
    textLight?: React.CSSProperties;
    textMedium?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    textRegular: true;
    textBold: true;
    textLight: true;
    textMedium: true;
  }
}
