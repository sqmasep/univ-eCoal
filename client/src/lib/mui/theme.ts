import { createTheme, responsiveFontSizes } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {}
  interface ThemeOptions {}
}

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222",
    },
    primary: {
      main: "#048ffa",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
