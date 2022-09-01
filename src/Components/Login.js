import React from "react";

export default function login(props) {
  const {
    email,
    setEmail,
    pass,
    passerr,
    setPass,
    handlelogin,
    handlesignup,
    hasaccount,
    setHasaccount,
    emailerr,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailerr}</p>
        <label>Password</label>
        <input
          type="password"
          autoFocus
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <p className="errorMsg">{passerr}</p>
        <div className="btnContainer">
          {hasaccount ? (
            <>
              <button onClick={handlelogin}>Sign In</button>
              <p>
                Don't Have a Account?<span onClick={()=> setHasaccount(!hasaccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handlesignup}>Sign Up</button>
              <p>
                Have an account ? <span onClick={()=> setHasaccount(!hasaccount)}>Login</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
