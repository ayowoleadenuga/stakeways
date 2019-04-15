import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardText } from 'reactstrap';

const card = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">{props.title}</CardHeader>
        <CardBody>
          <CardText>{props.body}</CardText>
          <Button>{props.cta}</Button>
        </CardBody>
        <CardFooter className="text-muted">{props.title}</CardFooter>
      </Card>
    </div>
  );
};

export default card;