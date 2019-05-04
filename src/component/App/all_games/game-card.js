import React from "react";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";
// import GameTemplate from '../game/game';

const GameCardTemplate = props => {
  const { routeDetails, classname, match } = props;
  return (
    <div>
      <Card>
        <CardHeader className="header" tag="h5">
          {routeDetails.title}
        </CardHeader>
        <CardBody className={classname}>
          <CardText>{routeDetails.body}</CardText>
          <Link to={`${match.path}${routeDetails.path}`} className="btni btn btn-secondary">
            Play
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default GameCardTemplate;
