import React, { Component } from 'react'
import Dashboard from '../Dashboard'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { sendCommunityData } from '../../store/actions/community'
import CommList from '../../components/Screens/CommList'

class Community extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    let { sendData, communityData } = this.props
    if (communityData.communityData.length === 0) {
      sendData('list', 'get'); 
    } else if(communityData.communityData.length === 1) {
      sendData('list', 'get'); 
    }
  }
  
  render() {
    let { loading, error , errorMessage, communityData } = this.props.communityData
      // console.log(communityData.data)
      let u;
      if (loading === 'done'){ 
        u = <ul className="card"><CommList communityData={ communityData.data }/></ul> ;
      }else {
        u = <div className="loader_con"><div id="big_loader"></div></div>
      }
      // u = <div className="loader_con"><div id="big_loader"></div></div>
      error === 'true' && errorMessage !== '' ? (u = errorMessage ) : (u = u)
      
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
  connect(mapStateToProps,mapDispatchToProps)
)(Community)