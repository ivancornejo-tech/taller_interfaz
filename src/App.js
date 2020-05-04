import React from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Formulario from "./Formulario/Formulario";
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom";
import Consulta from "./Consulta/Consulta";


const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: ["Noto Sans SC", '"Helvetica"', '"Arial"', '"sans-serif"'].join(","),
    },
    palette: {
        primary: {
            main: "#d32f2f",
            light: "#ff6659",
            dark: "#9a0007",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#f44336",
            light: "#ff7961",
            dark: "#ba000d",
            contrastText: "#000000"
        },
        white: "#ffffff",
        grey: {
          dark: "#666666",
          light: "#f2f2f2"
        },
        contrastThreshold: 3,
    },
});

function App() {
  return (
    <ThemeProvider theme = {theme}>
       <Router>
           <Switch>
               <Route exact path="/">
                   <Formulario/>
               </Route>
               <Route exact path="/consulta">
                   <Consulta/>
               </Route>
           </Switch>
       </Router>
    </ThemeProvider>
  );
}
export default App;
