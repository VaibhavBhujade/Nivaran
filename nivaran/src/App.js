import React from 'react';
import  { Component } from 'react';
import TopCarousel from './Components/main/TopCarousel';
import Main from './Components/main/MainComponent';
import Post from './Components/main/PostComponent';
import NavigBar from './Components/main/NavBarComponent';
import VerticalNav from './Components/main/VerticalNavBarComponent';
import NewPost from './Components/main/NewPostComponent';
import InfoCard from './Components/main/InfoCard';
import MyNavBar from './Components/main/HorizontalNavBar';
import RegisterForm from './Components/main/Registration';
import EventDisplay from './Components/main/EventDisplay';
import Campaign from './Components/main/AddCampaign';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';

class App extends Component {
  
  render(){
  return (
      <>
        <div className="App">
            <Main/>
            <MyNavBar/>
            
            <Row>
              <Col xs="3">
                  <VerticalNav/>
                </Col>

                        
              <Col xs="2">
                  <Campaign/>
                  <center>
                    <Col xs="10">
                      <Post/>
                      </Col>
                  </center>
                </Col>

            </Row>
            
            {/* <Main/>
              <MyNavBar/>
              <Row>
                <Col xs="3">
                  <VerticalNav />
                </Col>
                <Col xs="5">
                  <NewPost />
                </Col>
                <Col>
                  <InfoCard />
                </Col>
                <Col>
                  <Post />
                </Col>
              </Row>
          <Row>
            <Col xs="3">
            </Col>
          </Row>
            */}

        </div>
      </>
  );
}
}
export default App;

