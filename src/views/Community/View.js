import React, { Component } from 'react'
// import Dashboard from '../Dashboard'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendCommunityData } from '../../store/actions/community'
import Payment from '../../components/Payment'
import { isAuthType } from '../../services/Auth'
import { Link } from 'react-router-dom'

class View extends Component {
  constructor(props) {
    super(props)

    this.deleting = this.deleting.bind(this)
  }

  componentDidMount() {
    let id = this.props.match.params.id * 1;
    let { sendData, communityData } = this.props
    if (!isNaN(id)) {
      if (communityData.communityData.length === 0) {
        sendData(id, 'get');
      }
    }
  }

  deleting(id) {
    let formData = new FormData();
    formData.append('type', 'delete');
    formData.append('id', id);
    this.props.sendData(formData,'post');
    this.props.history.push('/community')
  }



  render() {
    let id = this.props.match.params.id * 1;
    let { loading, error, errorMessage, communityData } = this.props.communityData
    let u;
    let button;
    switch (isAuthType()) {
      case 'customer':
        button = (id) => { return ( <Payment info={{view:'community',id}} /> )};
        break;
      case 'admin':
        button = (id) => { return(<div className="btn_view">
        <button className="delete btn" onClick={ () => this.deleting(id) }>Delete</button>
        <Link to={'/community/edit/'+ id}><button className="edit btn">Edit</button></Link>
        </div>)};
        break;
      default:
        button = (id) => { null };
    }

    if (isNaN(id)) {
      u = <div className="title_big">Page not found</div>;
    } else {
      if (loading === 'done') {
        if (communityData.error.error === "false") {
          let data = [communityData.data.find(comm => comm.id === id)];
          u = <ul className="card">
                <React.Fragment>
                  {data && data.map(comm => {
                    let eachPara = comm.details.split(/[\r\n]+/);
                    let allDetails = eachPara && eachPara.map( (eachOne, index) => <p key={index}> {eachOne} </p>)
                    return (
                      <div className="community_container containerFull" key={comm.id}>
                        <div className="image">
                          <img src={comm.file_name} alt="" />
                        </div>
                        <div className="title_big">
                          {comm.location}
                        </div>
                        <hr className="hr" />
                        <div className="details">
                          <div className="detail">
                            <div className="published">
                              Date Pubished
                            </div>
                            <div className="date">
                              24, July 2020
                            </div>
                          </div>
                          <div className="detail">
                            <div className="amount"> <span>Fund:</span> ₦ {comm.amount}</div>
                            <meter value="13200" min="0" max="50000" className="meter meter_view"></meter>
                          </div>
                        </div>
                        <div className="text">
                          {allDetails}
                        </div>
                        {button(comm.id)}
                      </div>
                    )
                  })}
                </React.Fragment>
              </ul>;
        } else {
          u = <div className="title_big">Page not found</div>;
        }
      } else {
        u = <div className="loader_con"><div id="big_loader"></div></div>;
      }
    }
    error === 'true' && errorMessage !== '' ? (u = errorMessage) : (u = u)

    return (
      <React.Fragment>

        {/* <Dashboard> */}
          {u}
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
)(View)