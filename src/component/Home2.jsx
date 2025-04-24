import React from 'react';
import {  signOut } from "firebase/auth";
import {auth} from '../configuration';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/login");
            // console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    return(
        <>
            <nav>
                <p>
                    Welcome Home
                </p>

                <div>
                    <button onClick={handleLogout}>
                        LogIN
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Home;