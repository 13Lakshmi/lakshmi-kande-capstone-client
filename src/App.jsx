import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Attractions from './components/Attractions/Attractions';
import BucketList from './components/Bucketlist/BucketList';
//import AttractionDetails from './components/AttractionDetails/AttractionDetails';


function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/attractions" element={<Attractions />} />
    {/* <Route path="/attractiondetails/:attractionId" element={<AttractionDetails />} /> */}
    <Route path="/bucketlist" element={<BucketList />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;




























