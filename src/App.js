import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="background-color">
    <Header/>
    <Router >
     <Switch>
       <Route path='/home'>
         <Home/>
       </Route>
       <Route exact path='/'>
         <Home/>
       </Route>
       <Route path='/post/:postId'>
         <PostDetail/>
       </Route>
       <Route path='*'>
         <NoMatch/>
       </Route>
     </Switch>
    </Router>
    </div>
  );
}

export default App;
