import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login";
import {MyDrawer} from "./components/MyDrawer";


const App = (props) => {

        localStorage.clear();
        localStorage.setItem("Username", "juan.frasica@mail.escuelaing.edu.co");
        localStorage.setItem("Password", "1234");

    const [isLoggedInState, setIsLoggedInState] = useState(localStorage.getItem("isLoggedIn"));

    const handleSuccessfullyLogin = (e) => {
        setIsLoggedInState(true);
        localStorage.setItem("isLoggedIn", true);
    }

    const handleFailedLogin = (e) => {
        alert("Usuario o Clave Incorrectos");
        setIsLoggedInState(false);
        localStorage.setItem("isLoggedIn", false);
    }


    return (
        <div>
            <Login successfully={handleSuccessfullyLogin} failed={handleFailedLogin}/>
            <MyDrawer/>
        </div>
    );
}

export default App;
