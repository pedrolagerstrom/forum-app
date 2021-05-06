import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import GetCategories from './components/GetCategories';
import GetComments from './components/GetComments';
import GetThreads from './components/GetThreads';
import PostComment from './components/PostComment';
import PostThread from './components/PostThread';


function App() {
  return (
    <div class="container-sm">
      <h1>Forum</h1>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">Start</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/categories">Kategorier</Link>
                </li>                
              </ul>
            </div>            
          </div>
        </nav>
        <br></br>
        <Switch>
          <Route exact path="/"><h2>Välkommen till forumet</h2></Route>
          <Route exact path="/categories" component={GetCategories}/>
          <Route exact path="/category/:categoryId/thread" component={GetThreads}/>
          <Route exact path="/category/:categoryId/postthread" component={PostThread}/>
          <Route exact path="/thread/:threadId/comment" component={GetComments}/>
          <Route exact path="/thread/:threadId/postcomment" component={PostComment}/>
          <Redirect to="/" />
        </Switch>
      </Router>      
    </div>
  );
};

export default App;
