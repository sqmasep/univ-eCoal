import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material";

type Coeff = (coeff: number) => string;

declare module "@mui/material/styles" {
  interface Theme {
    styling: {
      outline: Coeff;
      shadow: Coeff;
    };
  }
  interface ThemeOptions {
    styling?: {
      outline: Coeff;
      shadow: Coeff;
    };
  }
}

let theme = createTheme({
  styling: {
    outline: coeff => `${coeff * 0.25}em solid black`,
    shadow: coeff => `${coeff * 0.25}em ${coeff * 0.25}em 0 black`,
  },
  palette: {
    // mode: "dark",
    background: {
      // default: "#222",
    },
    primary: {
      main: "#6E73FB",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Neue Plak",
      fontWeight: 900,
      fontStretch: "extra-expanded",
    },
    body1: {
      fontFamily: "Lexend",
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          outline: theme.styling.outline(1),
          boxShadow: theme.styling.shadow(2),
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          outline: theme.styling.outline(1),
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  },
} as ThemeOptions);

theme = responsiveFontSizes(theme);

export default theme;
