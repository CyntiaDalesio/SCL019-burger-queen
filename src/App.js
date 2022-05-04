import './App.css';
import { Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Menu from './pages/Menu';
import Error from './pages/Error';
import {UseStates} from './Usecontext/UserContent'
import React from 'react';

function App() {
  return (
    <UseStates>
   <Routes>
      <Route path='/' element={<Principal />} />
      <Route path='/Menu' element={ <Menu />} />
      <Route path='*' element={<Error />} />
    </Routes>
    </UseStates>
 
  );
}

export default App;
