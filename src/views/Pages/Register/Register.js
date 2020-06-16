import React, { Component } from 'react';
import {
  Button, Card, CardBody, Col, Container, Form, Input, InputGroup
  , InputGroupAddon, InputGroupText, Row, Nav, NavItem, NavLink, TabContent, TabPane
} from 'reactstrap';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchUserData } from '../../../store/actions/user';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      email: '',
      gender: 'M',
      country: 'Nigeria',
      dateofbirth: '',
      formId: 'customer',
      company: '',
      address: '',
      password: '',
      loading: false,
      activeTab: ["1"]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle(tab) {
    this.setState({
      activeTab: [tab]
    });
  }

  form(formId) {
    let optInp;
    let u = '';
    let f = '';
    let { firstname, phonenumber, email, gender, country, lastname, dateofbirth, company, address } = this.state;
    // console.log(this.state)
    let { loading, error, errorMessage, userData } = this.props.userData;
    error === 'true' && errorMessage !== '' ? (f = errorMessage)
      : (userData.errorcount !== '0' ? (f = userData.status) : (f = ''));
    loading === 'done' ? (u = 'Create Account') :
      (loading === 'true' ? (u = <div id="loader"></div>) : (u = 'Create Account'));

    if (formId === 'customer') {
      optInp = <>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText><span role="img" aria-label="name">&#9892;</span></InputGroupText>
          </InputGroupAddon>
          <Input type="select" id="gender" value={gender} onChange={this.handleChange}>
            <option>M</option>
            <option>F</option>
          </Input>
        </InputGroup>
        <InputGroup className="mb-4" >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <span role="img" aria-label="name">&#128198; &nbsp; Birthday</span>
            </InputGroupText>
          </InputGroupAddon>
          <Input type="date" id="dateofbirth" value={dateofbirth} onChange={this.handleChange} max="2030-12-30" min="1940-01-01" placeholder="yyyy-mm-dd" required />
        </InputGroup>
        <span style={{ display: 'block', marginBottom: '2.6em' }} ></span>
      </>;
    } else {
      optInp = <>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <span role="img" aria-label="name">&#127963;</span>
            </InputGroupText>
          </InputGroupAddon>
          <Input type="text" id="company" value={company} onChange={this.handleChange} placeholder="Company Name" autoComplete="company" required />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <span role="img" aria-label="name">&#9942;</span>
            </InputGroupText>
          </InputGroupAddon>
          <Input type="textarea" id="address" value={address} onChange={this.handleChange} placeholder="Company Address" autoComplete="address" required />
        </InputGroup>
      </>;
    }

    return (
      <Form onSubmit={this.handleSubmit} method="post" id={formId}>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-user"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input type="text" id="firstname" value={firstname} onChange={this.handleChange} placeholder="First Name" autoComplete="first name" required />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fa fa-user"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input type="text" id="lastname" value={lastname} onChange={this.handleChange} placeholder="Last Name" autoComplete="last name" required />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <span role="img" aria-label="name">&#9742;</span>
            </InputGroupText>
          </InputGroupAddon>
          <Input type="text" id="phonenumber" value={phonenumber} onChange={this.handleChange} placeholder="Phone Number" autoComplete="phone number" required />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
          </InputGroupAddon>
          <Input type="text" id="email" value={email} onChange={this.handleChange} placeholder="Email" autoComplete="email" required />
        </InputGroup>
        {optInp}
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText><span role="img" aria-label="name">&#9873;</span></InputGroupText>
          </InputGroupAddon>
          <Input type="select" id="country" value={country} onChange={this.handleChange}>
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>Guinea</option>
            <option>Niger</option>
          </Input>
        </InputGroup>
        <span className="error">{f}</span> <br />
        <Button type="submit" color="success" block>{u}</Button>
      </Form>
    )
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.id]: e.target.value
      }
    );
  }


  handleSubmit(e) {
    e.preventDefault();
    let { firstname, lastname, phonenumber, email, gender, country, dateofbirth } = this.state;
    const json = JSON.stringify({ firstname, lastname, phonenumber, email, gender, country, dateofbirth });
    let { fetchData } = this.props;
    fetchData(json, 'register');
    this.setState({
      loading: true
    });
  }

  componentDidUpdate(prevProps) {
    let { userData } = this.props.userData;
    if (this.props !== prevProps) {
      if (userData.length !== 0) {
        if (userData.errorcount === '0' && this.state.loading === true) {
          this.props.history.push('/message', { data: "success" })
        };
      };
    };
  }

  render() {
    let customerTab, agentTab;
    if (this.state.activeTab[0] === '1') {
      customerTab = this.form('customer');
      agentTab = '';
    } else {
      customerTab = '';
      agentTab = this.form('agent');
    }

    return (
      <div className="app flex-row align-items-center background_image">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <br /><br />
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <Nav tabs>
                    <NavItem style={{ width: '50%', textAlign: 'center' }}>
                      <NavLink
                        active={this.state.activeTab[0] === '1'}
                        onClick={() => { this.toggle('1'); }}
                      >
                        Customer
                </NavLink>
                    </NavItem>
                    <NavItem style={{ width: '50%', textAlign: 'center' }} title="disabled">
                      <NavLink disabled
                        active={this.state.activeTab[0] === '2'}
                        onClick={() => { this.toggle('2'); }}
                      >
                        Agent
                </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab[0]}>
                    <TabPane tabId="1">
                      {customerTab}
                    </TabPane>
                    <TabPane tabId="2">
                      {agentTab}
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (name, type) => dispatch(fetchUserData(name, type))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Register);