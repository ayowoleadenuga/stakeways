import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const CardTemplate = (props) => {
  return (
    <div className={props.classname}>
      <Card>
        <CardHeader tag="h5">{props.title}</CardHeader>
        <CardBody>
          <CardText>{props.body}</CardText>
          <Link to={props.destination}>
            <Button className={props.classname}>{props.cta}</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardTemplate;