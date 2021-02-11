import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PostPage from "./PostPage";

const Router = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/posts/:id">
                <PostPage />
            </Route>
        </Switch>
        <Footer/>
    </BrowserRouter>
);

export default Router;
