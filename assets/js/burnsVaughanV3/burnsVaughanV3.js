import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import SocialHeader from './SocialHeader.js'

class App extends Component {
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
      <div>
      <SocialHeader /> 
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
