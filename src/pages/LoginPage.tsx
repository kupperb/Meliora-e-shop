import React, { useState } from "react";
import Login from "../components/LoginForm";
import { RegisterForm }  from "../components/RegisterForm";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  };

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