import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Project from './Pages/Projects/Project';
import Resume from './Pages/Resume/Resume';
import Project from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contactme' element={<Contact/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
