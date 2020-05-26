import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthType } from '../../services/Auth'

let button;
switch (isAuthType()){
  case 'agent':
    button = (id) => { return (<Link to={'/donate/'+ id}><div className="button"><button type="button" name="button" className="btn_donate btn delete">donate</button></div></Link>)};
    break;
  case 'customer':
    button = (id) => { return (<div className="button">
    <button className="delete btn">Delete</button>
    <Link to={'/community/edit/'+ id}><button className="edit btn">Edit</button></Link>
    </div>)};
    break;
  default:
    button = (id) => { null };
}

const CommList = ({ communityData }) => {
  // console.log(communityData)
  return (
    <React.Fragment>
      {communityData && communityData.map(comm => {
        return (
          <li className="cards__item" key={comm.id}>
            <div className="card">
              <Link to={'/community/'+comm.id}>
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
              { button(comm.id) }
            </div>
          </li>
        )
      })}
    </React.Fragment>
  )
}

export default CommList
