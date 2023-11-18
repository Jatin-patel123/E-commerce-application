
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Card from './components/Card';
import Footer from './components/Footer';
import Tshirt from './components/Tshirt';
import Shirt from './components/Shirt';
import Jeans from './components/Jeans';
import Login from './components/Login';

function App() {
    const articles = [
    {
      img : "p1.jpg",
      no : 1
    },
    {
      img : "p2.jpg",
      no : 2
    },
    {
      img : "p3.jpg",
      no :3
    },
    {
      img : "p4.jpg",
      no : 4
    },
    {
      img : "p5.jpg",
      no : 5
    },
    {
      img : "p6.jpg",
      no : 6
    },
  ]

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
          <Navbar />
            <Home />
            <center>
              <h1>Categories</h1>
            </center>
            <div className="row">
              {articles.map((element) => (
                <div className="col-md-4" key={element.no}>
                  <Card imgurl={element.img} />
                </div>
              ))}
            </div>
            <Footer />
            
          </Route>
          <Route path="/tshirt"><Tshirt /></Route>
          <Route path="/shirt"><Shirt /></Route>
          <Route path="/jeans"><Jeans /></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
        
        </div>  
    </Router>
  );
}

export default App;
