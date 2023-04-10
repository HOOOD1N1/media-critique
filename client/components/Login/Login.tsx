import React from 'react';
import './Login.css';
import {useState, Fragment} from "react";
import Helmet from "react-helmet";

export default function Login() {
    const [type, setType] = useState("login");
    const [error, setError] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");

    

    const changeType = (event: any) => {
        event.preventDefault();
        if(type === "login") {
            setType("signup");
        } else if(type === "signup"){
            setType("login");
        }

    }
   const changeErrorValue = () => {
        if(error) {
            setError(false);
        } else {
            setError(true);
        }
    }

    const handleLoginSubmit = (e: any) => {
        e.preventDefault();
        console.log(`${username} ${email} ${pass1}`);
        const postObject = {
            email: email,
            password: pass1
        }
        if(type === "login") {
            // fetch('http://localhost:9001/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(postObject)
            //     }
            // ).then(response => response.json())
            // .then(json => {
                
            //     localStorage.setItem('user', JSON.stringify(json.payload));
            // })
            // .catch(err => changeErrorValue());
           
        }
        if(postObject?.email && postObject?.password){
            localStorage.setItem("user", JSON.stringify(postObject));
        }
        else {
            changeErrorValue();
        }
    }

    const handleSignupSubmit = (e: any) => {
        e.preventDefault();
        console.log(`${username} ${email} ${pass1}`);
        
         if(type === "signup") {
            if(!pass1 || !pass2 || pass1 !== pass2){
                changeErrorValue();
            }
            const postObject = {
                username: username,
                email: email,
                password: pass1
            }
            // fetch("http://localhost:9001/register", {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: postObject 
            // }).then(response => response.json())
            // .then(text => console.log("It worked"))
            // .catch(e => console.log(e));
            console.log(postObject);
        }
    }

    return(
        <Fragment>
            <Helmet>
                <script src="https://apis.google.com/js/platform.js" async defer></script>
                <meta name="google-signin-client_id" content="31068947404-bgjt4d2fteficdaht4fnsdee5j6b0q1s.apps.googleusercontent.com"></meta>
            </Helmet>
        <div className="grid">
        <div className="container">
            <div className="leftContainer">
                <h1 className="title"> Media Critique </h1>
                {/* <h2 className="subtitle">Share your work and ideas, and get feedback from people all around the world</h2> */}
            </div>
            <div className="rightContainer">
                {error ?
                    <div className="containerChild">
                        <p className="error-text">Incorrect email and/or password</p>
                     </div>
                     :null
                }

                <form onSubmit={type === 'login' ? handleLoginSubmit : handleSignupSubmit}/*onSubmit={handleSubmit}> */ >
                {type === "signup" ?
                <input type="text" className="containerChild" name="username" id="username" placeholder="Type your username" value={username} onChange={e => setUsername(e.target.value)} required/>
                : null
                }
                {type === "signup"
                ?<input type="text" className="containerChild" name="email" id="email" placeholder="Type your email" value={email} onChange={e => setEmail(e.target.value)} required />
                :<input type="text" className="containerChild" name="email" id="email" placeholder="Type your email" value={email} onChange={e => setEmail(e.target.value)} required/>
                }

                    
                    <input type="password" name="password" id="password" className="containerChild" placeholder="Type your password" value={pass1} onChange={e => setPass1(e.target.value)} required/>
                    {type === "signup" ?
                        <input type="password" name="password" id="password" className="containerChild" value={pass2} placeholder="Retype your password" onChange={e => setPass2(e.target.value)} required/>
                        : null
                    }
                    {type === "login" ?
                        <div>
                        <button type="submit" className="login containerChild" onClick={handleLoginSubmit}> Log In </button>
                        <button className="containerChild" onClick={changeType}>Sign Up</button>
                        </div>
                    : <div>
                        <button type="submit" className="containerChild" onClick={changeErrorValue}>Sign Up</button>
                        <button className="containerChild" onClick={(e) => {changeErrorValue(); changeType(e) }}>Return to Log In</button>
                    </div>
                    
                    }
                </form>
                

               
            </div>
        </div>
        </div>
        </Fragment>
    );


}