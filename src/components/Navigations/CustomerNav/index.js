import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class CustomerNav extends Component {
  render() {
    return (
      <React.Fragment>
              <ul className="asideList">
                <li><Link to={'/account'} className="asideAnchor">My Account</Link></li>
                <li><Link to={'/order'} className="asideAnchor">Order</Link></li>
                <li><Link to={'/community'} className="asideAnchor">Community</Link></li>
                <li><Link to={'/history'} className="asideAnchor">History</Link></li>
                <li><Link to={'/support'} className="asideAnchor">Support</Link></li>
                <li><Link to={'/about'} className="asideAnchor">About</Link></li>
              </ul>
      </React.Fragment>
    )
  }
}

export default CustomerNav
