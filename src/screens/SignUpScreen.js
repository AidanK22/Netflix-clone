import React,{useRef} from 'react'
import { auth } from '../firebase';
import "../styling/SignUpScreen.css";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignUpScreen() {


    const emailRef = useRef(null);

    const passwordRef = useRef(null);


    const register = (e) => {
        console.log("running register function")
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message);
        })
    };

    const signIn = (e) => {
        console.log("running register function")
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => alert(error.message));
    };

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4>
                    <span className="signupScreen__gray">New to Netflix?</span>
                    <span className="signupScreen__link" onClick={register}> Sign Up now.</span> 
                </h4>
            </form>

            
        </div>
    )
}

export default SignUpScreen
