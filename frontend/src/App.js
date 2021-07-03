import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Car from './components/Car'

import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
