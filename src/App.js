import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import AddBlog from './components/AddBlog';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<AddBlog/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
