import React, { Component } from 'react'
// import Dashboard from '../Dashboard'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendCommunityData } from '../../store/actions/community'
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom'
import { isAuthType } from '../../services/Auth'

class Community extends Component {
  constructor(props) {
    super(props)

    this.deleting = this.deleting.bind(this)
  }

  componentDidMount() {
    let { sendData, communityData } = this.props
    if (communityData.communityData.length === 0) {
      sendData('list', 'get');
    } else {
      if (communityData.communityData.data.length === 1) {
        sendData('list', 'get');
      }
    }
  }

  deleting(id) {
    let formData = new FormData();
    formData.append('type', 'delete');
    formData.append('id', id);
    this.props.sendData(formData,'post');
  }

  render() {
    let { loading, error, errorMessage, communityData } = this.props.communityData
    let u;
    let button;
    let auth = 'admin';
    switch (auth){
      case 'customer':
        button = (id) => { return (<Link to={'/community/' + id}><div className="button">
          <button type="button" name="button" className="btn_donate btn delete">donate</button>
          </div></Link>)};
        break;
      case 'admin':
        button = (id) => { return (<div className="button">
        <button className="delete btn" onClick={ () => this.deleting(id) }>Delete</button>
        <Link to={'/community/edit/'+ id}><button className="edit btn">Edit</button></Link>
        </div>)};
        break;
      default:
        button = (id) => { null };
    }

    if (loading === 'done') {
      u =  <Row style={{overflow:"hidden"}}>
              {communityData.data && communityData.data.map(comm => {
              let eachPara = comm.details.split(/[\r\n]+/);
              return (
              <Col xs="12" sm="6" md="4" key={comm.id} style={{margin:'20px 0'}}>
                <Card className="card__item">
                  <Link to={'/community/' + comm.id}>
                    <img src={comm.file_name} alt="" className="card__image" />
                    <div className="card__content">
                        <div className="amount"> <span>Fund:</span> ₦ {comm.amount}</div>
                        <meter value="13200" min="0" max="50000" className="meter"></meter>
                        <div className="card__title"> {comm.location} </div>
                        <p className="card__text"> {eachPara[0]} </p>
                    </div>
                  </Link>
                  {button(comm.id)}
                </Card>
              </Col>
              )
              })}
            </Row>

    } else {
      u = <div className="loader_con"><div id="big_loader"></div></div>
    }
    error === 'true' && errorMessage !== '' ? (u = errorMessage) : (u = u)
    return (
      <React.Fragment>

        {/* <Dashboard> */}
          <div className="community_container">
            { u }
          </div>

        {/* </Dashboard> */}

      </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    communityData: state.communityData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendData: (data, type) => dispatch(sendCommunityData(data, type))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Community)