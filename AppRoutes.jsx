import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Test from './src/components/Test/Test';

const AppRoutes = () => {
    <BrowserRouter>
        <Switch>
            <Route path='/' component={<Test />} />
        </Switch>
    </BrowserRouter>
}

export default AppRoutes