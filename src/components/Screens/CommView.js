import React from 'react'
import { Link } from 'react-router-dom'
import flower from '../../assets/image.jpg'


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
          { comm.location }
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
         { comm.details }
        </div>
    
        <button type="button" name="button" className="btn_donate btn delete">Donate</button>
         <div className="btn_view">
         <button className="delete btn">Delete</button>
          <button className="edit btn">Edit</button>
         </div>
      </div>
      )
    })}
  </React.Fragment>
  )
}

export default CommView
