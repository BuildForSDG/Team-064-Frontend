import React from 'react'
import { Link } from 'react-router-dom'

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

              <div className="button">
                <button type="button" name="button" className="btn_donate btn delete">Donate</button>
                <button className="delete btn">Delete</button>
                <button className="edit btn">Edit</button>
              </div>
            </div>
          </li>
        )
      })}
    </React.Fragment>
  )
}

export default CommList
