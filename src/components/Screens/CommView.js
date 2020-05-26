import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated, isAuthType, authenticateUser } from '../../services/Auth'

let button;
switch (isAuthType()) {
  case 'customer':
    button = (id) => { return (<Link to={'/donate/'+ id}><div className="btn_view"><button type="button" name="button" className="btn_donate btn delete">Donate</button></div></Link>)};
    break;
  case 'admin':
    button = (id) => { return(<div className="btn_view">
    <button className="delete btn">Delete</button>
    <Link to={'/community/edit/'+ id}><button className="edit btn">Edit</button></Link>
  </div>)};
    break;
  default:
    button = '';
}

const CommView = ({ data }) => {
  return (
    <React.Fragment>
      {data && data.map(comm => {
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
              {comm.details}
            </div>
            { button(comm.id) }
            {/* <button type="button" name="button" className="btn_donate btn delete">Donate</button> */}
            {/* <div className="btn_view">
              <button className="delete btn">Delete</button>
              <button className="edit btn">Edit</button>
            </div> */}
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default CommView
