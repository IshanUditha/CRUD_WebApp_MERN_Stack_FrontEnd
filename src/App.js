import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Users from './Users';
import Home from './Home';

function App() {
  return (
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      </Routes>
      </BrowserRouter>
       
   
  );
}

export default App;
