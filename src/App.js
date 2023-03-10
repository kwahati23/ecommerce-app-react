import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>
          <Route path='/' element={<Home/>}>
            <Header/>
            <Home/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
