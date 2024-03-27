import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import Signup from './components/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Login" element={<Login />} />
    <Route path="/Signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
