import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../views/main/index';
import Repository from '../views/Repository/index';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/repository" component={Repository} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
