import React, { Component } from 'react';
import CardTemplate from '../cards/card';
import { connect } from "react-redux";
import { payStackService } from "../transactions/services/PayStackServices";
import { historyService } from "../history/service/HistoryServices";

// let homeMenu = [
//   {
//     key:1,
//     title:"Games Played",
//     body: "0",
//     class: "geepee",
//     cta: "View History",
//     destination:"/app/history"
//   },
//   {
//     key:2,
//     title:"Active Games",
//     body: "0",
//     class: "haygee",
//     cta: "View History",
//     destination:"/app/history"
//   },
//   {
//     key:3,
//     title:"Account Balance",
//     body: "0",
//     class: "haybee",
//     cta: "View Transactions",
//     destination:"/app/history"
//   }
// ]
class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        allGames: "",
        activeGames: "",
        costumerBalance: "",
        betHistoryData: []
      };
    }

  componentDidMount() {
    this.getBetHistory(this.props.response.result.userId);
    this.getUserDetails(this.props.response.result.userId);
  }

  getUserDetails = id => {
    payStackService
      .getUserDetails(id)
      .then(response => {
        // console.log(response);
        this.setState({
          costumerBalance: response.result.balance,
        });
      })
      .catch(error => this.setState({ error: error }));
  };

  getBetHistory = id => {
    historyService
      .getAllBetsHistory(id)
      .then(response => {
        console.log(response);
        this.setState({
          allGames: response.result.length,
          betHistoryData: response.result,
          activeGames: this.noOfActiveGames(response.result)
        });
      })
      .catch(error => this.setState({ error, fetching: false }));
  };

  noOfActiveGames = games => {
    let count = 0;
    for(var game in games) {
      if (game.betstate && game.betstate === 1) {
        count += 1
      } 
    }return count
  }

  render() {
    console.log(this.state)
    return (
      <div className='home'>
        <h3>Welcome to Stakeways</h3>
        <br/>
        <div className='cardview'>
          {/* {homeMenu.map(card => (
            <CardTemplate
              classname={card.class}
              key={card.key}
              title={card.title}
              body={card.body}
              cta={card.cta}
              destination={card.destination}
            />
          ))} */}
          <CardTemplate
              classname ="geepee"
              key ="1"
              title ="Games Played"
              body = {this.state.allGames}
              cta ="View History"
              destination = "/app/history"
            />
            <CardTemplate
              classname ="haygee"
              key ="2"
              title ="Active Games"
              body = {this.state.allGames}
              cta ="View History"
              destination = "/app/history"
            />
            <CardTemplate
              classname ="haybee"
              key ="3"
              title ="Account Balance"
              body = {this.state.costumerBalance}
              cta ="View History"
              destination = "/app/history"
            />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { response } = state.auth;
  return {
    response,
  };
};

export default connect(
  mapStateToProps
)(Home);

