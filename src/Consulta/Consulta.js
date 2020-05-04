import React from 'react';
import { withStyles } from "@material-ui/core/styles";

import Header from "../Header/Header";
import Buscador from "./Buscador";

const style = theme => ({
    
}
);


class Consulta extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Buscador/>
            </div>
        );
    }
}

export default (withStyles(style)(Consulta));
