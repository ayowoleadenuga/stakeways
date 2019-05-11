import React, { Component } from 'react';
// import lotto from "../../assets/lotto.png";


class GameTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      gametype:  '',
      username: '',
      password: '',
      ballsArray: []
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
  fillBalls = () => {
    let balls = []
    for(let i=1; i<91; i++){
      balls.push(i);
    }
    this.setState({
      ballsArray: balls
    })
    console.log(this.state.ballsArray)
  }
  handleSubmit = event => {
    event.preventDefault()
    const { gametype, username, password } = this.state
    alert(`Your registration detail: \n 
           gametype: ${gametype} \n 
           Username: ${username} \n
           Password: ${password}`)
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {    
    console.log('rendered')
    return (
      <React.Fragment>
      <h6>Play Game</h6>
      <p>Step {this.state.currentStep} </p> 

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          gametype={this.state.gametype}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />
        {this.previousButton()}
        {this.nextButton()}

      </form>
      </React.Fragment>
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group col-md-6 offset-3">
      <label htmlFor="gametype">1st step</label>
      <select
        className="form-control"
        id="gametype"
        name="gametype"
        type="select"
        placeholder="Select Gametype"
        value={props.gametype}
        onChange={props.handleChange}
        >  
        </select>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  let balls = []
    for(let i=0; i<91; i++){
      balls.push(i);
    }
  return(
    <div className="form-group col-md-4 offset-4">
      <h5>Select Numbers</h5>
      <br/>
      <div className="balls">
        {balls.map(ball => (
        <div class="ball" key={`ball${balls[ball]}`}>{balls[ball]}</div>
        ))}  
      </div>
      
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group">
      <label htmlFor="password">3rd step</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={props.password}
        onChange={props.handleChange}
        />      
    </div>
    <button className="btn btn-success btn-block">Place Bet</button>
    </React.Fragment>
  );
}

export default GameTemplate;