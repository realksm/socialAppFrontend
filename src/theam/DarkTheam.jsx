import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // This sets the theme to dark mode
    primary: {
      main: "rgb(88,199,250)",
       // Customize the primary color to your preference
      // main: "red"
    },
    secondary: {
      main: "#5A20CB", // Customize the secondary color to your preference
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#212534",
      default: "#212534",
      paper: "#212534",
    },
    textColor: {
      main: "#111111",
    },
  },
});

export default darkTheme;