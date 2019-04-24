import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class MenuHeader extends Component {
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
        <div className="menu-bar">
            <div className="menu-bar-container">
                <div className="logo">
                    BURNS VAUGHAN
                </div>
            </div>
        </div>
    )
  }
}
