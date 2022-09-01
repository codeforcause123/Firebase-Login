import { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./Components/Login";
import Hero from "./Components/Hero";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [passerr, setPasserr] = useState("");
  const [hasaccount, setHasaccount] = useState(false);

  const cleanupinputs = () => {
    setEmail("");
    setPass("");
  };
  const cleanerr = () => {
    setEmailerr("");
    setPasserr("");
  };
  const handlelogin = () => {
    cleanerr();
    fire
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailerr(err.message);
            break;
          case "auth/wrong-password":
            setPasserr(err.message);
            break;
          default:
        }
      });
  };
  const handlesignup = () => {
    cleanerr();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailerr(err.message);
            break;
          case "auth/weak-password":
            setPasserr(err.message);
            break;
          default:
        }
      });
  };
  const handlelogout = () => {
    fire.auth().signOut();
  };
  const authlistener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        cleanupinputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authlistener();
  }, []);
  return (
    <div className="App">
      {user && <Hero handlelogout={handlelogout}/>}
      {!user && <Login
        email={email}
        setEmail={setEmail}
        pass={pass}
        setPass={setPass}
        handlelogin={handlelogin}
        handlesignup={handlesignup}
        hasaccount = {hasaccount}
        setHasaccount = {setHasaccount}
        emailerr = {emailerr}
        passrr ={passerr}
      />}
    </div>
  );
}

export default App;
