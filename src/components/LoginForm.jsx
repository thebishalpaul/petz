import React from 'react'
import './LoginForm.css'
import CloseIcon from '@mui/icons-material/Close';
function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignUp,
  hasAccount,
  successMsg,
  emailError,
  passwordError,
  setOpenPopup,
  sethasAccount
}) {
  
  return(
    <>
        <section className="login">
          {successMsg&&<>
            <p>{successMsg}</p>
          </>}
           <button className="close-btn" onClick={()=>setOpenPopup(false)}><CloseIcon fontSize="large"/></button>
            <div className="loginContainer">
                <label>Email Id</label>
                <input type="text" autoFocus
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}     
                />
                <p className="errorMsg">
                {emailError}
                </p>
                <label>Password</label>
                <input type="password" required value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <p className="errorMsg">
                {passwordError}
                </p>
                <div className="btnContainer">
                  {hasAccount?
                  (
                  <>
                   <button onClick={handleLogin}>Sign In</button>
                   <p>Don't have an account ?
                   <span onClick={()=>sethasAccount(!hasAccount)}>Sign Up</span>
                   </p>
                  </>
                  ):
                  (
                  <>
                   <button onClick={handleSignUp}>Sign up</button>
                   <p>Have an account ?<span onClick={()=>sethasAccount(!hasAccount)}>Sign in</span>
                   </p> 
                  </>
                  )}
                </div>
            </div>
        </section>
    </>
  )
}

export default LoginForm;