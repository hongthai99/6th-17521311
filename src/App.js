import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoingList from './components/DoingList';
import ListModal from './components/listmodal';
import {Container, Row, Col} from 'reactstrap';
//import {useState, useEffect} from 'react';

//
import { Provider } from 'react-redux';

//import store 
import store from './redux/store';
import {loadUser} from './actions/authActions';
import AppNavBar from './components/navBar';


class App extends Component{
  componentDidMount(){
      store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar/>
          <Container>
            <Row>
              <Col md style={{marginTop:'20%', marginLeft:'2rem'}}>
                <h1><strong>Hello<br/>
                Welcome back.<br/>
                You have some <br/>
                remaining task<br/>
                need to complete.</strong></h1>
              </Col>
              <Col md>
                <ListModal/>
                <DoingList/>
              </Col>
            </Row>
          </Container>
      </div>
      </Provider>
      
    );
  }
}

export default App;