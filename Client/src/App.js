// import  { createContext, useState, useEffect } from "react";
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import axios from "./axiosConfig";
// import Home from "./pages/Home";  // Make sure to import Home
// import Login from "./pages/Login";  // Make sure to import Login
// import Register from "./pages/Register";  // Make sure to import Register

// export const AppState = createContext();

// function App() {
//     const [user, setuser] = useState({});

//       const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   async function checkUser() {
//     try {
//       const { data } = await axios.get("/user/check",{
//       headers: {
//       Authorization: 'Bearer' + token,
//       },
//       });
//       setuser(data);
//     } catch (error) {
//       console.log(error.response);
//       navigate("/login");
//     }
//   }

//   useEffect(() => {
//     checkUser();
//   }, []);



  

  

//   // const contextValue = {
//   //   user,
//   //   setUser,
//   // };

//   return (
    
//       <AppState.Provider value={{user, setuser}}>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//         </Routes>
//       </AppState.Provider>
   
//   );
// }

// export default App;
































import { Route, Routes, useNavigate } from "react-router-dom";
// import { useEffect, useState, createContext } from "react";
import React, { useEffect, useState, createContext } from "react";

import axios from "./axiosConfig";
import LandingLayout from "./pages/LandingLayout/LandingLayout";
import Home from "./pages/Home/Home";
import Question from "./Components/AskQuestion/AskQuestion";
import Answer from "./Components/Answer/Answer";
import Footer from "./Components/Footer/Footer";

export const AppState = createContext();

function App() {
  const [user, setuser] = useState({});
  const [question, setQuestion] = useState({});

  // console.log(question)

  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data)
      setuser(data);
      console.log(data);
    } catch (error) {
      navigate("/Login");
      console.log(error.response);
    }
  }

  async function getQuestion() {
    try {
      const { data } = await axios.get("/questions/getquestions", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log(data)
      setQuestion(data); // Assuming data holds the question value
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  }

  useEffect(() => {
    checkUser();
    getQuestion();
  }, [navigate]);
console.log(user)
//console.log(setuser)
  return (
    <AppState.Provider value={{ user, setuser, question, setQuestion }}>
      <Routes>
        <Route path="/Login" element={<LandingLayout/>} />
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Question user={user} />} />
        <Route path="/answer" element={<Answer />} />
      </Routes>
      <Footer/>
    </AppState.Provider>
  );
}

export default App;





















// import { Route, Routes, useNavigate } from "react-router-dom";
// import { useEffect, useState, createContext } from "react";
// import axios from "./axiosConfig";
// import LandingLayout from "./pages/LandingLayout/LandingLayout";
// import Home from "./pages/Home/Home";
// import Question from "./Components/AskQuestion/AskQuestion";
// import Answer from "./Components/Answer/Answer";
// import Footer from "./Components/Footer/Footer";

// export const AppState = createContext();

// function App() {
//   const [user, setuser] = useState({});
//   const [question, setQuestion] = useState({});

//   // console.log(question)

//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();


//   async function checkUser() {
//     try {
//       const { data } = await axios.get("/users/check", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log(data)
//       setuser(data);
//       console.log(data);
//     } catch (error) {
//       navigate("/Login");
//       console.log(error.response);
//     }
//   }

//   async function getQuestion() {
//     try {
//       const { data } = await axios.get("/questions/getquestions", {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });
//       // console.log(data)
//       setQuestion(data); // Assuming data holds the question value
//     } catch (error) {
//       console.error("Error fetching question:", error);
//     }
//   }

//   useEffect(() => {
//     checkUser();
//     getQuestion();
//   }, [navigate]);


//   useEffect(()=>{
//     if(!user?.username){
//       navigate("/login")
//     }
//   },[user])
  
// console.log(user)
// //console.log(setuser)
//   return (
//     <AppState.Provider value={{ user, setuser, question, setQuestion }}>
//       <Routes>
//         <Route path="/Login" element={<LandingLayout/>} />
//         <Route path="/" element={<Home />} />
//        <Route path="/questions" element={<Question  />} /> 
//         <Route path="/answer" element={<Answer />} />
//       </Routes>
//       <Footer/>
//     </AppState.Provider>
//   );
// }

// export default App;


























