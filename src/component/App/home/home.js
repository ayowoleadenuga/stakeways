import React, { Component } from 'react'
import CardTemplate from '../cards/card';

let homeMenu = [
  {
    key:1,
    title:"Games Played",
    body: "0",
    class: "geepee",
    cta: "View History",
    destination:"/app/history"
  },
  {
    key:2,
    title:"Active Games",
    body: "0",
    class: "haygee",
    cta: "View History",
    destination:"/app/history"
  },
  {
    key:3,
    title:"Account Balance",
    body: "0",
    class: "haybee",
    cta: "View Transactions",
    destination:"/app/history"
  }
]
export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h3>Welcome to Stakeways</h3>
        <br/>
        <div className='cardview'>
          {homeMenu.map(card => (
            <CardTemplate
              classname={card.class}
              key={card.key}
              title={card.title}
              body={card.body}
              cta={card.cta}
              destination={card.destination}
            />
          ))}
        </div>
      </div>
    )
  }
}
