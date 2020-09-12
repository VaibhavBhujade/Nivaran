import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  

class NewPost extends Component {
    
    render()
    {
        const myStyle =  {
            color: '#ffffff',
            backgroundColor: '#000000',
            padding:'20px',
          };
        return(
            <div style={myStyle}>
                <Button>Create new Post</Button>
            </div>
            
        );
    }
}
export default NewPost;