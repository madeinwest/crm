import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import {AuthProvider} from './context/Auth'
import PrivateRoute from './routes/PrivateRoute'

function App() {

  return (
		<AuthProvider>
			<Router>
				<div className="tets">
					<PrivateRoute exact path='/' component={Home}/>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/signup' component={SignUp}/>
				</div>
			</Router>
		</AuthProvider>

  );
}

export default App;
