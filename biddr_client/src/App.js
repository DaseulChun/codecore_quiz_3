import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { User, Session } from "./requests";
import WelcomePage from "./components/WelcomePage";
import AuctionIndexPage from "./components/AuctionIndexPage";
import AuctionShowPage from "./components/AuctionShowPage";
import AuctionNewPage from "./components/AuctionNewPage";
import SignInPage from "./components/SignInPage";
import AuthRoute from "./components/AuthRoute";
import Navbar from "./components/Navbar";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
  }
  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  signOut = () => {
    Session.destroy().then(() => {
      this.setState({
        currentUser: null
      });
    });
  };
  componentDidMount() {
    this.getUser();
  }

  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return (
        <h1>Loading...</h1>)
    }
    return (
      <Router>
        <div className="ui container">
          <Navbar currentUser={currentUser} onSignOut={this.signOut} />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/auctions" exact component={AuctionIndexPage} />
            <AuthRoute
              isAllowed={currentUser}
              path="/auctions/new"
              component={AuctionNewPage}
            />
            <Route path="/auctions/:id" exact component={AuctionShowPage} />
            <Route
              path="/sign_in"
              render={routeProps => (
                <SignInPage onSignIn={this.getUser} {...routeProps} />
              )}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
