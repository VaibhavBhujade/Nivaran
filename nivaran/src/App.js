import React from 'react';
import  { Component } from 'react';
import TopCarousel from './components/main/TopCarousel';
import Main from './components/main/MainComponent';
import Post from './components/main/PostComponent';
import NavigBar from './components/main/NavBarComponent';
import VerticalNav from './components/main/VerticalNavBarComponent';
import NewPost from './components/main/NewPostComponent';
import InfoCard from './components/main/InfoCard';
import MyNavBar from './components/main/HorizontalNavBar';
import RegisterForm from './components/main/registration';
import EventDisplay from './components/main/EventDisplay';
import Campaign from './components/main/AddCampaign';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';

class App extends Component {
  
  render(){
  return (
      <>
        <div className="App">
            {/* <Main/>
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

            </Row> */}
            
             <Main/>
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
            

        </div>
      </>
  );
}
}
export default App;

