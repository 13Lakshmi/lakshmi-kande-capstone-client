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
import BucketList from './components/BucketList/BucketList';
import AttractionDetails from './components/AttractionDetails/AttractionDetails';
import AddAttraction from './components/AddAttraction/AddAttraction';
 import video from "../src/assets/Images/videobackground.mp4";

 
 
 function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
 
   // Function to handle login
   const handleLogin = () => {
     setIsLoggedIn(true);
   };
 
   // Function to handle logout
   const handleLogout = () => {
     setIsLoggedIn(false);
   };
 
   return (
    <UserProvider>
     <BrowserRouter>
       <Header />
       <Routes>
         <Route path="/" element={<Home isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
         <Route path="/login" element={<Login onLogin={handleLogin} />} />
         <Route path="/attractions" element={isLoggedIn ? <Attractions /> : <Navigate to="/login" />} />
         <Route path="/addattraction" element={<AddAttraction />}/>
                 <Route path="/attraction/:id" element={<AttractionDetails />} />
                  <Route path="/bucketlist" element={<BucketList />} />
       </Routes>
       <Footer />
     </BrowserRouter>
     </UserProvider>
   );
 }
 
 function Home({ isLoggedIn, onLogin }) {
   return (
     <div className="home">
       <a href="/login">
         <video autoPlay muted loop className="home__video">
           <source src={video} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
       </a>
       {!isLoggedIn && <Login onLogin={onLogin} />}
     </div>
   );
 }
 
 export default App;
 
// // function App() {

// //  const [isLoggedIn, setIsLoggedIn] = useState(false);

// //  // Function to handle login
// //   const handleLogin = () => {
// //     setIsLoggedIn(true);
// //   };

// //   // Function to handle logout
// //   const handleLogout = () => {
// //     setIsLoggedIn(false);
// //     Navigate("/");
// //   };

// //   return (
// //     <UserProvider>
// //     <BrowserRouter>
// //      <Header />
// //             <Routes>
            
// //               <Route path="/" element={<Login onLogin={handleLogin}/>} />
// //                <Route path="/signup" element={<SignUp  />} />
// //             {isLoggedIn ? (
// //           <>
// //                   {/* <video src={video} /> */}
// //                   <Route path="/attractions" element={<Attractions />} />
// //                   <Route path="/addattraction" element={<AddAttraction />}/>
// //                   <Route path="/attraction/:id" element={<AttractionDetails />} />
// //                   <Route path="/bucketlist" element={<BucketList />} />
// //           </>
// //                   ) :(
// //                     <Route path="/" element={<Login onLogin={handleLogin} />} />

// //                   )}
            
// //             </Routes>
// //             <Footer />
    
// //     </BrowserRouter>
// //     </UserProvider>

// //   );

// // }


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Function to handle login
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <UserProvider>
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/attractions" element={<Attractions />} />
//         <Route path="/addattraction" element={<AddAttraction />} />
//         <Route path="/attraction/:id" element={<AttractionDetails />} />
//         <Route path="/bucketlist" element={<BucketList />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//     </UserProvider>
//   );
// }


// function Home({ isLoggedIn, onLogin }) {
//   return (
//     <div className="home">
//       <a href={isLoggedIn ? '/attractions' : '/login'}>
//         <video autoPlay muted loop className="home__video">
//           <source src={video} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </a>
//       {!isLoggedIn && <Login onLogin={onLogin} />}
//     </div>
//   );
// }


//export default App;




























