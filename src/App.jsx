import './App.scss';
import { useState, Navigate, useContext } from 'react';
import { UserContext } from './components/UserContext';
import { UserProvider } from './components/UserContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Attractions from './components/Attractions/Attractions';
import BucketList from './components/Bucketlist/BucketList';
import AttractionDetails from './components/AttractionDetails/AttractionDetails';


function App() {

 const [isLoggedIn, setIsLoggedIn] = useState(false);

 // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log('working');
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserProvider>
    <BrowserRouter>
    {/* {isLoggedIn && (
          <button className="header__logout" onClick={handleLogout}>Logout</button>
      )} */}
     <Header />
            <Routes>
              <Route path="/" element={<Login onLogin={handleLogin}/>} />
               <Route path="/signup" element={<SignUp  />} />
            {isLoggedIn ? (
          <>
                  <Route path="/attractions" element={<Attractions />} />
                  <Route path="/attraction/:id" element={<AttractionDetails />} />
                  <Route path="/bucketlist" element={<BucketList />} />
          </>
                  ) :(
                    <Route path="/" element={<Navigate to="/" />} />

                  )}
            
            </Routes>
            <Footer />
    
    </BrowserRouter>
    </UserProvider>

  );

}

export default App;





{/* <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/attractions" element={<Attractions />} />
    <Route path="/attraction/:id" element={<AttractionDetails />} />
    <Route path="/bucketlist" element={<BucketList />} />

    </Routes>
    <Footer/>
    </BrowserRouter> */}






















