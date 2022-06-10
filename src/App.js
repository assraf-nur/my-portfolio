import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Home/Contact';
import Home from './Components/Home/Home';
import Projects from './Components/Home/Projects';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
