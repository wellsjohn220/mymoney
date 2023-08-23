import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useState, useEffect } from "react";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Version from "./pages/version/Version";
import Recipe from "./pages/recipe/Recipe";
import Create from "./pages/create/Create";
import Edit from "./pages/edit/Edit";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();
  useEffect(() => {   
    setTimeout(() => {       
      setLoading(false);      
   }, 900);  
  }, [loading]);

  if (loading) {    
    console.log('load start... ' + loading);
    return <Spinner />;    
  }
  
  return (     
    //console.log('load 2... ' + loading);
    <div className="App">   
        <BrowserRouter>   
        <Navbar />
        <Switch>        
          <Route exact path="/">         
            {!user && <Redirect to="/login" />}
            {user && <Home />}         
          </Route>
          <Route path="/version">
            <Version />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            {user && <Redirect to="/" />}
            {!user && <Login />}
          </Route>
          <Route path="/signup">
            {user && user.displayName && <Redirect to="/" />}
            {!user && <Signup />}
          </Route>
          
        </Switch>
       
      </BrowserRouter>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    
    </div> 
  );
}

export default App;
