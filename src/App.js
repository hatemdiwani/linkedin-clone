import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sider from './components/Sider';
import Feed from './components/Feed';
import {selectUser} from './features/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import Profile from './components/Profile' 
import {login,logout}  from './features/userSlice';
import Login from './components/Login';
import SginUp from './components/SginUp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth } from './firebase/firebase';


function App() {

  const dispatch = useDispatch()
  

  useEffect(() => {
   auth.onAuthStateChanged((authstate) => {
     if(!authstate){
       console.log(authstate)
       dispatch(login({
        uid:authstate.uid,
        avatarurl:authstate.photoURL
        }))
     }
     else {
       dispatch(logout())
     }
   })
  }, [])

  const user = useSelector(selectUser)
  return (
    <>
      
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/signup" component={SginUp}/>
          {
            user?
            (
            <>
            <div className="app">
              <Header/>
              <div className="app-body">
                <Route path="/feed">
                  <Sider/>
                  <Feed/>
                  <Sider/>
                </Route>
                <Route path="/in/hatem" component={Profile}/>
              </div>
            </div>
            
            </>
            )
            :
            <Login/>
          }
        </Switch>
      </Router>    
    </>
  );
}

export default App;
