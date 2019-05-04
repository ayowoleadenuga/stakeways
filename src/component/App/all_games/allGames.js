import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GameCardTemplate from "./game-card";
import { routes } from "./allGamesApi";
import { Route, Switch } from "react-router-dom";
import GameTemplate from "../game/game";

export default class AllGames extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={match.url}
            name="allGames"
            render={() => (
              <div>
                <h4>All Games</h4>
                <br />
                <div className="cardview">
                  {routes.map(route => (
                    <GameCardTemplate
                      key={route.key}
                      match={match}
                      routeDetails={route}
                      classname={`tinted-${route.name}`}
                    />
                  ))}
                </div>
              </div>
            )}
          />
          <Route
            path={`${match.path}/:game`}
            component={GameTemplate}
          />
        </Switch>
      </div>
    );
  }
}
