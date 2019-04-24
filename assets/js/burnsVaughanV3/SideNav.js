import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class SideNav extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Burns'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
        <div className="nav1">
            <div className="nav">
                <div className="nav-links">
                    <div className="home-highlighted"><a href="#">Home</a></div>
                    <br/>
                    <a href="#">About</a><br/>
                    <a href="#">Projects</a>
                </div>
            </div>
        </div>
    )
  }
}

