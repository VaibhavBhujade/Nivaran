import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';

import {
  Container, Form,
  FormGroup, Label, Input,
  Button,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

class PostForm extends Component {

  
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
                    <h2>Add New Post</h2>
                    <Form className="form">
                     <FormGroup>
                        <Label>Caption:</Label>
                            <Input //<textarea type="text" rows="1" cols="35" id="caption" 
                                
                                type="text"
                                name="caption"
                                id="captionid"
                             />
                      </FormGroup>

                                                <FormGroup>
                                                  <Label for="Image"></Label>
                                                  <Input
                                                    type="file"
                                                    name="image"
                                                    id="imageid"
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

export default PostForm ;