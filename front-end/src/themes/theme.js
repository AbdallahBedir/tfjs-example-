import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2a2438",
    },
    background: {
      default: "#5c5470",
      //   paper: "#3a4750",
    },
    shape: {
      borderRadius: "12px",
    },
    // secondary: {
    //   main: "",
    // },
  },
});
export default theme;
