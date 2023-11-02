import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import Home from './component/Home';
import About from './component/About';
import Terms from './component/Terms';
import Login from './component/Login';
import Footer from './component/Footer';
import Header from './component/Header';
import AllUser from './component/AllUser';
import Contact from './component/Contact';
import Register from './component/Register';
import { AuthProvider } from './component/AuthContext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() { 
  axios
    .get("all_users")
    .then((response) => {
      this.setState({
        users: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
              <Route path='/all_users' element={<AllUser alldata={this.state.users} />} />
              <Route path='/register' element={<Register /> }/>
              <Route path='/contact' element={<Contact /> }/>  
              <Route path='/sign_up' element={<Login /> }/> 
              <Route path='/about' element={<About /> }/>
              <Route path='/terms' element={<Terms /> }/> 
              <Route path='/' element={<Home /> }/>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
      </>
    );
  }
}

export default App;
