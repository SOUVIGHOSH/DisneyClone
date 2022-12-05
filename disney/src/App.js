import './App.css';
import {Routes, Route} from 'react-router-dom'
import Welcome from './components/Welcome';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Welcome/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>

    </Routes>
    </>
  );
}

export default App;
