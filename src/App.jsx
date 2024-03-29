import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login";
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Attractions from './components/Attractions/Attractions';
import BucketList from './components/Bucketlist/BucketList';


function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/attractions" element={<Attractions />} />
    <Route path="/bucketlist" element={<BucketList />} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;




























// import './App.scss';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from 'react';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import Attractions from './components/Attractions/Attractions';
// import Signup from './components/SignUp/SignUp';
// import Login from './components/Login/Login';
// import Bucketlist from './components/Bucketlist/BucketList';


// function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Function to handle login
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     console.log('working');
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <BrowserRouter>
//       {isLoggedIn && (
//       <div className="header__logout-container">
          
//       </div>
//       )}
//       {isLoggedIn && <Header />}
//       <Routes>
//         <Route path="/" element={<Signup />} />
//        <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         {isLoggedIn ? (
//           <>
//             <Route path="/attractions" element={<Attractions />} />
//             <Route path="/bucketlist" element={<Bucketlist />} />
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>
//       {isLoggedIn && <Footer />}
//     </BrowserRouter>
//   );
// }

// export default App;