/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">
            <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" /> Broomy
          </Navbar.Brand>
        </Navbar>
        {/* authenticated = (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" /> Broomy
        </Navbar.Brand>
      </Navbar>
       ) : (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img alt="" src="/logo.svg" width="30" height="30" className="d-inline-block align-top" /> Broomy
        </Navbar.Brand>
      </Navbar>
       )
       */}
      </Fragment>
    );
  }
}

export default Index;
