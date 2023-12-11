import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Project from './components/Project/Project';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/About' element={<About />}></Route>
    <Route path='/Project' element={<Project />}></Route>
    <Route path='/Contact' element={<Contact />}></Route>
    <Route path='/Resume' element={<Resume />}>
    </Route>
    </Routes>
    </div>
  );
}

export default App;
