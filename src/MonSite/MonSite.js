import React, { Component } from 'react';
import {Container} from "semantic-ui-react";
import MonHeader from "./MonHeader/MonHeader.js";
import MaNav from "./MaNav/MaNav.js";
import MonCompte from "./MonCompte/MonCompte.js";
import MonCarnet from "./MonCarnet/MonCarnet.js";
import {Router, Route} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

class MonSite extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route path="/" component={MonHeader} />
                    <Route path="/" component={MaNav}/ >
                    <Route path="/monCompte" component={MonCompte} />
                    <Route path="/consulterCarnet" component={MonCarnet} />
                    <Route path="/remplirCarnet" component={MonCarnet} />
                </div>
            </Router>              
        );
    }
}

export default MonSite;