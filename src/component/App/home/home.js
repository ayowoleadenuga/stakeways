import React, { Component } from 'react'
import CardTemplate from '../cards/card';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h3>Welcome to Stakeways</h3>
        <br/>
        <div className='cardview'>
          <CardTemplate
            title="Games Played"
            body="0"
            cta="View History"
          />
          <CardTemplate
            title="Active Games(s)"
            body="0"
            cta="View More"
          />
          <CardTemplate
            title="Account Balance"
            body="0"
            cta="View Transactions"
          />
        </div>
        
      </div>
    )
  }
}
