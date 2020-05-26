import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdminNav extends Component {
  render() {
    return (
      <React.Fragment>
              <ul className="asideList">
                <li><Link to={'/account'} className="asideAnchor">My Account</Link></li>
                <div className="dropdown">
                  <li><Link to={'/agent'} className="asideAnchor">Agents <span>&#187;</span> </Link></li>
                  <div className="dropdown_content">
                    <Link to={'/add_agent'} className="asideAnchor">Add</Link>
                    <Link to={'/agent'} className="asideAnchor">Review</Link>
                  </div>
                </div>
                <div className="dropdown">
                  <li><Link to={'/community'} className="asideAnchor">Community <span>&#187;</span> </Link></li>
                  <div className="dropdown_content">
                    <Link to={'/community'} className="asideAnchor">Review</Link>
                    <Link to={'/community/edit'} className="asideAnchor">Add</Link>
                  </div>
                </div>
                <li><Link to={'/customers'} className="asideAnchor">Customers</Link></li>
              </ul>
      </React.Fragment>
    )
  }
}

export default AdminNav
