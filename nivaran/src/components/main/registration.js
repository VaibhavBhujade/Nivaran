import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';

import {
  Container, Form,
  FormGroup, Label, Input,
  Button,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

class RegisterForm extends Component {

  
  render() {

    const myStyle = 
    { 
     // padding:'20px',
     
    };

    return(
      
    <>
        <div style={myStyle}>
        </div>
            
        <center>
          <Card>
              <CardBody>

                    <div className="A">
                    <h2>Registration</h2>
                    <Form className="form">
                     <FormGroup>
                        <Label>Email:</Label>
                            <Input //<textarea type="text" rows="1" cols="35" id="caption" 
                              type="text"
                                name="email"
                                id="exampleEmail"
                                //placeholder="myemail@email.com"
                             />
                      </FormGroup>

                                                <FormGroup>
                                                  <Label for="examplePassword">Password:</Label>
                                                  <Input
                                                    type="password"
                                                    name="password"
                                                    id="Password"
                                                    placeholder="********"
                                                  />
                                                </FormGroup>

                                                <FormGroup>
                                                  <Label for="Address">Address:</Label>
                                                  <Input
                                                    type="text"
                                                    name="Address"
                                                    id="Address"
                                                  />
                                                </FormGroup>

                                                <FormGroup>
                                                  <Label for="Contact No.:">  Contact No.:</Label>
                                                  <Input
                                                    type="text"
                                                    name="contact"
                                                    id="contact"
                                                  />
                                                </FormGroup>

                                              <Button>Submit</Button>
                                  </Form>
                              </div>
                                
                  </CardBody>
                </Card>
              </center>
    </>
                
    );
  }
}

export default RegisterForm ;