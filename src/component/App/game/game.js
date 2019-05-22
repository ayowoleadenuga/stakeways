import React, { Component } from 'react';
import GameDraw from './gameDraw';
// import lotto from "../../assets/lotto.png";


class GameTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      gametype:  '',
      username: '',
      password: '',
      disableBalls: false,
      ballsArray: [],
      disabled: true
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
  handleGameTime = () => {
    console.log("I'm here")
    let elem = document.getElementById('game-time');
    elem.style.border = '6px solid green';
    this.setState({
      disabled: false
    })
  }
  handleGameSelect = (e) => {
    const selectedGame = e.target.value;
    this.setState({
      gametype: selectedGame
    })
  }
  handleBallSelect = (e) => {
    let ballArr = [];
    let ballNumber = e.target.value;
    console.log(ballNumber)
    ballArr.push(ballNumber);
    this.setState((prevState) => {
      return {ballsArray: [...prevState.ballsArray, ...ballArr]}
    }, () => this.validateBalls());
  }

  validateBalls = () => {
    let { ballsArray } = this.state
    let gameType = this.state.gametype;
    switch (gameType) {
      case "PERM2":
      case "PERM3":
      case "PERM4":
      case "PERM8":
      case "PERM10":
        ballsArray && ballsArray.length === 6 ? this.setState({ disableBalls: true}) :  this.setState({disableBalls: false});
        break;
      default:
        ballsArray && ballsArray.length === 2 ? this.setState({ disableBalls: true}) :  this.setState({disableBalls: false});
        break;
    }
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
* the functions for buttons
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
        type="button" onClick={this._next} disabled={this.state.disabled}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {
    return (
      <React.Fragment>
      <h6>Play Game</h6>
      <p>Step {this.state.currentStep} </p> 

        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          gametype={this.state.gametype}
          handleGame={this.handleGameTime}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          handleChange2={this.handleBallSelect}
          handleGameSelect={this.handleGameSelect}
          handleDisable={this.state.disableBalls}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />
        {this.previousButton()}
        {this.nextButton()}

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
      <label htmlFor="gametype">1st step: Choose Draw</label>
      <GameDraw handle={props.handleGame} clas={"game-time"}/>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  const balls = []
    for(let i=0; i<91; i++){
      balls.push(i);
    }
  return(
    <div className="form-group col-md-6 offset-3">
      <h5>Select Game type and pick balls</h5>
      <br/>
      <form>
        <select className="gameType" placeholder="Select game type" onChange={props.handleGameSelect}>
        <option>NAP2</option>
        <option>PERM2</option>
        <option>PERM3</option>
        <option>PERM4</option>
        <option>PERM8</option>
        <option>PERM10</option>
      </select>
      <br/>
      <br/>
      <div className="balls">
        <ul>
          {balls.map(ball => (
          <li key={`ball${balls[ball]}`}>
            <input disabled={props.handleDisable} onClick={props.handleChange2} type="checkbox" id={`check${balls[ball]}`} className="ball" value={balls[ball]} /><label htmlFor={`check${balls[ball]}`} >{balls[ball]}</label>
          </li>
          ))}
        </ul>
      </div>
      </form>
      
      
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