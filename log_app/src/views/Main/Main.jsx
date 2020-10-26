import React from 'react';
import { Switch, Route } from 'react-router-dom';

import StartPage from '../../pages/StartPage';
import ContactPage from '../../pages/ContactPage';
import HelpPage from '../../pages/HelpPage';
import LoginPage from '../../pages/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage';
import FreeStartPage from '../../layouts/FreeStartPage';
import LostPasswordPage from '../../pages/LostPasswordPage';
import ErrorPage from '../../pages/ErrorPage';

const Main = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/help" component={HelpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/registration" component={RegistrationPage} />
            <Route path="/free_start" component={FreeStartPage} />
            <Route path="/lost_password" component={LostPasswordPage} />
            <Route path="/empty" component={ErrorPage} />
        </Switch>
    );
};

export default Main;
