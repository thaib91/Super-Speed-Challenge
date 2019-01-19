import React, { Component } from 'react';
import swal from 'sweetalert2';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: 0,
      color: '',
      time: '',
      radio: '',
      password: '',
      checkboxOne: '',
      checkboxTwo: ''
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    console.log('started')
    var flag = true;
    const { name, age, color, time, radio, password, checkboxOne, checkboxTwo } = this.state
    if (name !== 'Bob Ross') {
      console.log(name)
      flag = false
    }
    if (age !== "52") {
      console.log(age)
      flag = false
    }
    if (color !== "Egg White") {
      console.log(color)
      flag = false
    }
    if (time !== "23:34") {
      console.log(time)
      flag = false
    }
    if (radio !== "yes") {
      console.log(radio)
      flag = false
    }
    if (password !== "password") {
      console.log(password)
      flag = false
    }
    if (checkboxOne !== "on") {
      console.log(checkboxOne)
      flag = false
    }
    if (checkboxTwo !== "") {
      console.log(checkboxTwo)
      flag = false
    }
    if (flag) {
      swal({
        type: 'success',
        title: 'Sucess',
        showConfirmButton: false,
      })
    } else {
      console.log('failed')
      swal({
        type: 'error',
        title: 'Try Again',
        showConfirmButton: false,
      })
    }
  }

  render() {
    return (
      <div className='form'>
        <div className="form-input"><label htmlFor="">Bob Ross: </label><input type="text" name="name" onChange={this.handleChange} /></div>
        <div className="form-input"><label htmlFor="">52: </label><input type="number" name="age" onChange={this.handleChange} /></div>
        <div className="form-input"><label htmlFor="">Egg White: </label><select name="color" onChange={this.handleChange}>
          <option name="Red" value="Red" id="">Red</option>
          <option name="Green" value="Green" id="">Green</option>
          <option name="Blue" value="Blue" id="">Blue</option>
          <option name="Teal" value="Teal" id="">Teal</option>
          <option name="Rose Gold" value="Rose Gold" id="">Rose Gold</option>
          <option name="Orange" value="Orange" id="">Orange</option>
          <option name="Magenta" value="Magenta" id="">Magenta</option>
          <option name="Gold" value="Gold" id="">Gold</option>
          <option name="#BADA55" value="#BADA55" id="">#BADA55</option>
          <option name="Lime" value="Lime" id="">Lime</option>
          <option name="Peru" value="Peru" id="">Peru</option>
          <option name="Gains Boro" value="Gains Boro" id="">Gains Boro</option>
          <option name="Cobalt Blue" value="Cobalt Blue" id="">Cobalt Blue</option>
          <option name="Dodger Blue" value="Dodger Blue" id="">Dodger Blue</option>
          <option name="Cream" value="Cream" id="">Cream</option>
          <option name="Egg White" value="Egg White" id="">Egg White</option>
          <option name="Cyan" value="Cyan" id="">Cyan</option>
          <option name="Black" value="Black" id="">Black</option>
          <option name="Grey" value="Grey" id="">Grey</option>
        </select></div>
        <div className="form-input"><label htmlFor="">11:34 PM: </label><input type="time" name="time" onChange={this.handleChange} /></div>
        <div className="form-input">
          <label htmlFor="">Checked: </label>
          <input type="checkbox" name="checkboxOne" onChange={this.handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="">Unchecked: </label>
          <input type="checkbox" name="checkboxTwo" onChange={this.handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="">No: </label>
          <input type="radio" name="radio" value="no" onChange={this.handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="">No: </label>
          <input type="radio" name="radio" value="no" onChange={this.handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="">Yes: </label>
          <input type="radio" name="radio" value="yes" onChange={this.handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="">password: </label>
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}
