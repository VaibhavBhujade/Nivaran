import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import TopCarousel from './TopCarousel';
import MyForm from './create_event_post';
import RegisterForm from './registration';

  
class NewPost extends Component {
    
  constructor(props){
    super(props);
    this.state={add_post:false};
    }
    change_val()
    {
        this.setState({add_post:true});
        
    }
      
    render()
    {

        const myStyle =  {
            color: 'black',
            backgroundColor: '#000000',
           // padding:'20px',
          };
        return(

            <div style={myStyle}>
                {(!this.state.add_post) ? <TopCarousel /> : <RegisterForm />}

                <Button onClick={()=>this.change_val()}>Create new Post</Button>
            </div>
           
        );
    }
}
export default NewPost;