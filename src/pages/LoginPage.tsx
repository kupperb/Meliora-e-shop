import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Signup from "../components/Signup";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  }

  
    return (
      <div className="Login">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
        }
      </div>
    );
  }

export default LoginPage;