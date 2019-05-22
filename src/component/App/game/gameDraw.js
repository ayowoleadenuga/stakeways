import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card,Row, Col, Container } from 'reactstrap';
import lotto from '../../../component/assets/lotto.png';

const GameDraw = (props) => (
  <div>
    <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
      Wednesday, 30th January Draws
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
          <Container id={props.clas} onClick={props.handle}>
              <Row>
                  <Col className="col-5"><img className="img" src={lotto} alt="logo" /></Col>
                  <Col className="col-6 offset-1">
                    <h1>MARK II</h1>
                    <p>Draw Time: 9.45pm</p>
                    <p>Betting Closes: 10.45pm</p>
                  </Col>
              </Row>
          </Container>
        </CardBody>
      </Card>
    </UncontrolledCollapse>
  </div>
);

export default GameDraw;