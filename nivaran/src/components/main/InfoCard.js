import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import './images/C1.jpg';

class InfoCard extends Component {
    render()
    {
        return(
            <Card>
                {/* <CardImg top width="50%" src="./images/C1.jpg" alt="Card image cap" /> */}
                <CardBody className="Jumbotron">
                <CardTitle>Explore drives nearby</CardTitle>
                <CardSubtitle>Donate for social good</CardSubtitle>
                <CardText >We can't help everyone but everyone can help someone</CardText>
                <Button>Click here to explore drives</Button>
                </CardBody>
            </Card>
            
        );
    }
}
export default InfoCard;

