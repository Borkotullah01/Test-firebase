import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase.config";
import { useState } from "react";
const Login = () => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const handleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const loggedUser = result.user;
            setUser(loggedUser);
        })
        .catch((error)=>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })

    }
    const handleLogOUt =()=>{
        signOut(auth)
        .then(()=>{
            console.log("Sign Out successfully")
            setUser(null)
        })
        .catch(()=>{
            console.log("An Error happened")
        })
    }
    console.log(user);
    return (
        <div style={{textAlign: "center", margin: "50px"}}>
            {
                user ? <button onClick={handleLogOUt}>Log Out</button> :
                <button onClick={handleLogin}>Log In</button>
            },
            
            <div>
                <img src={user.photoURL} alt="Photo Url" />
                <h1>User Name: {user.displayName}</h1>
                <h2>User Email: {user.email}</h2>
            </div>

        </div>
    );
};

export default Login;