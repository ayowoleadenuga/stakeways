import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardText } from 'reactstrap';

const CardTemplate = (props) => {
  return (
    <div>
      <Card>
        <CardHeader tag="h3">{props.title}</CardHeader>
        <CardBody>
          <CardText>{props.body}</CardText>
          <Button className="btn btn-secondary float-right">{props.cta}</Button>
        </CardBody>
        <CardFooter className="text-muted">{props.title}</CardFooter>
      </Card>
    </div>
  );
};

export default CardTemplate;