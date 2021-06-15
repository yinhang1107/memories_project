import React from "react";
import { Container } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const App = () => {
  const user = useSelector((state) => state.auth.authData);
  return (
    <Container maxwidth="xl">
      <Navbar />
      <Switch>
        <Route
          path="/auth"
          component={(props) =>
            !user ? <Auth {...props} /> : <Redirect to="/" />
          }
        />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" exact component={PostDetails} />
        <Route path="/posts" component={Home} />
        <Redirect from="/" to="/posts" />
      </Switch>
    </Container>
  );
};

export default App;
