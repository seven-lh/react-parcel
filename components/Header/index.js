

import React from 'react'
import FontAwesome from 'react-fontawesome';
import {
  Link
} from 'react-router-dom'

// import Nav from './Nav'

export default class Header extends React.Component {
  state = {
      showNav: false,
    }
 
  toggleNav = () => {
    this.setState({showNav: !this.state.showNav})
  }
  render() {
    return (
      <header>
        <div className="open_nav">
          <FontAwesome name="bars"
            style={{
              color: '#fff',
              padding: '10px',
              cursor: 'pointer'
            }}
            onClick={this.toggleNav}
          />
        </div>
        {/* <Nav showNav={this.state.showNav}/> */}
        <Link to="/" className="logo">APP</Link>
      </header>
    )
  }
}
