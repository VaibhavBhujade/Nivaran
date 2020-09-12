import React from 'react';
import ReactDOM from 'react-dom';
import './create_event_post.css';
import {Row,Col} from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

let caption="{caption from input}";
let img="{img from input}";

class MyForm extends React.Component 
{

    store_data()
    {
       // alert("Posted Successfully");
    }

    render()
    {
            const myStyle = 
                 { 
                     padding:'20px',
                    // margin:'20px'
                 };
        
            return(
            <>
                <div style={myStyle}>
                </div>
            
                <form>
                    <center>
                        <Card>
                            <CardImg top width="50%"  />
                                <CardBody>
                                    <Row>
                                        <Col xs="3">
                                        </Col>
                    
                                        <Col>
                                            <div className="border1">   
                                                <h1>Add your post details
                                                </h1>

                                                <p>Caption:
                                                </p>
                                                
                                                <textarea type="text" rows="4" cols="35" id="caption"  />
                                                <div style={myStyle}>
                                                    <p>Image: 
                                                        <input type="file" id="img"/>
                                                    </p>
                                                </div>
                                    
                                                <button onClick={this.store_data()}>
                                                Submit
                                               </button>
                                                

                                            </div>

                                        </Col>
                                
                                        <Col xs="3">
                                        </Col>
                                
                                    </Row>
                                </CardBody>
                        </Card>
                    </center>
                </form>

            </>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
export default MyForm;