/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomerSidebar from '../../Navigations/Sidedrawer/CustomerSidebar';

class CustomerDashboard extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col className="w-25">
              <CustomerSidebar />
            </Col>
            <Col className="w-75">Hello</Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default CustomerDashboard;
