import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import SinglePost from './pages/SinglePost';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/post' element={<Post />}/>
        <Route path='/singlePost/:id' element={<SinglePost/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
