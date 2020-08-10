import React, { Component } from "react";
import "./app.css";
import NavBar from "./Components/navbar/navbar";
import Main from "./Components/main";
import { BrowserRouter as Router } from "react-router-dom";
import SideDrawer from "./Components/navbar/side-drawer/side-drawer";
import Footer from "./Components/footer/footer";
class App extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerTaggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  closeSideDrawer = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar
            drawerClickHandler={this.drawerTaggleClickHandler}
            rotate={this.state.sideDrawerOpen}
          />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            closeSideDrawer={this.closeSideDrawer}
          />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
