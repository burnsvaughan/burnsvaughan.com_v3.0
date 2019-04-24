import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class SocialHeader extends Component {
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
      <div className="social-bar">
          <div className="social-bar-container">
              <div className="social-bar-icons">
                  <div className="address">Auckland</div>
                  <div className="phone-number">Web Developer</div>
                  <div className="social-icons">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
              </div>
          </div>
      </div> 
    )
  }
}
