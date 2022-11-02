import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  console.log(React);
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
