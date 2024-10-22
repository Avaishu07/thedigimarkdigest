import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact';
import AboutPage from './pages/AboutPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Viewnews from './pages/Viewnews';
import NavBar from './components/Navbar';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/signup';
import CreateBlog from './pages/CreateBlog';




function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/viewnews" element={<Viewnews />} />
          <Route path="/resources" element={<Resources />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/createnews" element={<CreateBlog />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
