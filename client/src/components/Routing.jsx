import React from 'react';
import {Switch, Route} from "react-router-dom";

import PostsPage from "./PostsPage/PostsPage";
import GamesPage from "./GamesPage/GamesPage";

const Routing = () => {
    return (
            <Switch>
                <Route path='/posts'>
                    <PostsPage/>
                </Route>
                <Route path='/games'>
                    <GamesPage/>
                </Route>
                <Route path='*'>
                    <h1>Error 404</h1>
                </Route>
            </Switch>
    );
};


export default Routing;