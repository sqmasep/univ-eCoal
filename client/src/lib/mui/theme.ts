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

const COEFFICIENT = 0.25;

let theme = createTheme({
  styling: {
    outline: coeff => `${coeff * COEFFICIENT}em solid black`,
    shadow: coeff =>
      `${coeff * COEFFICIENT}em ${coeff * COEFFICIENT}em 0 black`,
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
    MuiButton: {
      styleOverrides: {
        root: {
          outline: theme.styling.outline(1),
          boxShadow: theme.styling.shadow(2),
          transition: ".2s",
          "&:is(:hover, :focus-visible)": {
            transform: `translate(${2 * COEFFICIENT}em, ${2 * COEFFICIENT}em)`,
            boxShadow: "none",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: theme.styling.outline(0.5),
          boxShadow: theme.styling.shadow(0.5),
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          outline: theme.styling.outline(0.75),
          borderRadius: 3,
        },
      },
    },
  },
} as ThemeOptions);

theme = responsiveFontSizes(theme);

export default theme;
