import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import flower from '../../assets/image.jpg'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendCommunityData } from '../../store/actions/community'
import CommView from '../../components/Screens/CommView'


class View extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
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

  render() {
    let id = this.props.match.params.id * 1;
    let { loading, error, errorMessage, communityData } = this.props.communityData
    let u;
    if (isNaN(id)) {
      u = <div className="title_big">Page not found</div>;
    } else {
      if (loading === 'done') {
        if (communityData.error.error === "false") {
          let data = [communityData.data.find(comm => comm.id === id)];
          u = <ul className="card"><CommView data={data} /></ul>;
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

        <Dashboard>
          {u}
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
)(View)