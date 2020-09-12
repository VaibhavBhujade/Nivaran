import React from 'react';
import  { Component } from 'react';
import TopCarousel from './components/main/TopCarousel';
import Main from './components/main/MainComponent';
import Post from './components/main/PostComponent';
import NavigBar from './components/main/NavBarComponent';
import VerticalNav from './components/main/VerticalNavBarComponent';
import NewPost from './components/main/NewPostComponent';
import InfoCard from './components/main/InfoCard';
import './App.css';

import { Container, Row, Col, Button } from 'reactstrap';

function App() {
  
  return (
        <>
        <div className="App">
        <Main/>
        <Row>
          <Col xs="3">
            <VerticalNav />
          </Col>
          <Col xs="5">
          <TopCarousel />
          </Col>
          <Col>
            <InfoCard />
          </Col>
          
        </Row>
        <Row>
          <Col xs="3">
          </Col>
          <Col>
            <NewPost />
          </Col>
        </Row>
        
        <Post />
        </div>
        </>
  );
}
export default App;

