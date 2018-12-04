import React, { Component } from 'react'

export default class PageTwo extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false,
      secretCode: "Bob Ross is the origial Ganster"
    }
  }

  showCode = () => {
    this.setState({
      clicked: true
    })
  }

  render() {
    return (
      <div className="App-header">
        <button onClick={this.showCode}>Get code</button>
        <input value={this.state.clicked ? this.state.secretCode : ''} />
        <button className="worthless">worthless button</button>
        <button className="worthless">worthless button</button>
        <button className="worthless">worthless button</button>
        <button className="worthless">worthless button</button>
        <button className="worthless">worthless button</button>
        <button className="worthless">worthless button</button>
        <button className="worthless">worthless button</button>
        <button className="worthless">worthless button</button>
        <button className="worthless">worthless button</button>
        <button className="worthless">worthless button</button>
      </div>
    )
  }
}
