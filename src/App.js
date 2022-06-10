import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Home/Contact';
import Home from './Components/Home/Home';
import Projects from './Components/Home/Projects';
import Navbar from './Components/Navbar/Navbar';
import Dvalley from './Components/Projects/Dvalley';
import Mohsin from './Components/Projects/Mohsin';
import Total from './Components/Projects/Total';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='total' element={<Total></Total>}></Route>
        <Route path='dvalley' element={<Dvalley></Dvalley>}></Route>
        <Route path='mohsin' element={<Mohsin></Mohsin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
