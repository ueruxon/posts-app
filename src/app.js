import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Posts from "./containers/posts";
import Comments from "./containers/comments";
import Users from "./containers/users";

import NavBar from "./components/navbar";

const App = () => {
    return (
        <BrowserRouter >
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route path="/posts" component={Posts} />
                    <Route path="/comments" component={Comments} />
                    <Route path="/users" component={Users} />
                </Switch>
            </div>
        </BrowserRouter >
    )
}

export default App;