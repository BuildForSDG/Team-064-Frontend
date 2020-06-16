import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import { withRouter } from 'react-router-dom';


class RegMessage extends Component {
  componentDidMount() {
    if (this.props.location.state !== undefined) {
      if (this.props.location.state.data !== "success") {
        this.props.history.push('/register')
      }
    } else {
      this.props.history.push('/register')
    }
  }
  render() {
    return (
      <div className="app flex-row align-items-center background_image">
        <Container>
          <Row className="justify-content-center">
            <Col md="6" style={{ backgroundColor: 'white', borderRadius: '1em' }}>
              <div className="clearfix" >
                <h1 className="float-left display-3 mr-4"><span className="" role="img" aria-label="confirmed">&#9989;</span></h1>
                <h4 className="pt-3">Registered Successfuly!</h4>
                <p>Check your email for password and login details</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(RegMessage)
