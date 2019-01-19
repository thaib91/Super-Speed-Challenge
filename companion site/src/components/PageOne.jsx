import React, { Component } from 'react'

export default class pageOne extends Component {
  constructor() {
    super();

    this.state = {
      inputOne: "",
      inputTwo: "",
      correctOne: false
    }
  }

  inputs = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    })
  }

  submitOne = () => {
    if (this.state.inputOne === '426f 6220 526f 7373 206 973207 46865206f72 69676 96e616c 20676 16e677 3746572') {
      this.setState({
        inputTwo: `http://localhost:3000/#/${this.props.url}`,
        correctOne: true
      })
    } else {
      alert('wrong string')
    }
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h2>First Input</h2>
          <div className="input">
            <input
              type="text"
              onChange={this.inputs}
              name="inputOne"
              value={this.state.inputOne}
            />
            <button onClick={this.submitOne} className="usefull">Submit</button>
          </div>

          <h2>Second Url</h2>
          <div className="input">
            <input type="text" value={this.state.inputTwo} />
            <button className="usefull" onClick={this.submitTwo}>Submit</button>
          </div>

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
        </header>
      </div>
    )
  }
}
