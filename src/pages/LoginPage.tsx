import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import { RegisterForm }  from "../components/RegisterForm";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  };

  /*var h1Element = document.querySelector('body');

 h1Element.style.color = 'blue';*/


    return (
      <div>
        {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} /> 
        ) : ( 
        <RegisterForm onFormSwitch={toggleForm} />
        )}
      </div>
    );
  };

export default LoginPage;