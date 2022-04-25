import './App.css';
import { Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Menu from './pages/Menu';
import Error from './pages/Error';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Principal />} />
      <Route path='/Menu' element={ <Menu />} />
      <Route path='*' element={<Error />} />


    </Routes>
  );
}

export default App;
