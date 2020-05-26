import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendCommunityData } from '../../store/actions/community'
import CommList from '../../components/Screens/CommList'
import { Link } from 'react-router-dom'
import { isAuthType } from '../../services/Auth'

class Community extends React.PureComponent {
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
    // console.log('render')
    let { loading, error, errorMessage, communityData } = this.props.communityData
    let u;
    let button;
    switch (isAuthType()){
      case 'customer':
        button = (id) => { return (<Link to={'/donate/'+ id}><div className="button">
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
      u = <ul className="card"><React.Fragment>
            {communityData.data && communityData.data.map(comm => {
              return (
                <li className="cards__item" key={comm.id}>
                  <div className="card">
                    <Link to={'/community/' + comm.id}>
                      <div className="card_image">
                        <img src={comm.file_name} alt="" className="card__image" />
                      </div>
                      <div className="card__content">
                        <div className="amount"> <span>Fund:</span> ₦ {comm.amount}</div>
                        <meter value="13200" min="0" max="50000" className="meter"></meter>
                        <div className="card__title"> {comm.location} </div>
                        <p className="card__text"> {comm.details} </p>
                      </div>
                    </Link>
                    {button(comm.id)}
                  </div>
                </li>
              )
            })}
          </React.Fragment></ul>


      // u = <ul className="card"><CommList communityData={communityData.data} /></ul>;
    } else {
      u = <div className="loader_con"><div id="big_loader"></div></div>
    }
    error === 'true' && errorMessage !== '' ? (u = errorMessage) : (u = u)

    return (
      <React.Fragment>

        <Dashboard>
          <div className="community_container">
            { u }
          </div>

        </Dashboard>

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