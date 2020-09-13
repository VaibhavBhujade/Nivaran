import React, { Component } from "react";
import img3 from './images/i3.jpg';
import {
  Container, Row, Col,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
} from "reactstrap";

const style = { width: "25rem" , margin: "10px"};

class DisplayEvent extends Component {

 
  render()
  {
    return (
      <>
      
      <Row>
        <Col xs="3"></Col>
        <Col>
          <Card style={style}>
            <CardImg
              alt="..."
              src={img3}
              top
            ></CardImg>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </Col>
      
        <Col xs="10"></Col>
        <Col>
          <Card style={style}>
            <CardImg
              alt="..."
              src={img3}
              top
            ></CardImg>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </CardText>
              <Button
                color="primary"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Go somewhere
              </Button>
            </CardBody>
          </Card>
        </Col>
      
      </Row>

      

      </>
    );
  }
}

export default DisplayEvent;