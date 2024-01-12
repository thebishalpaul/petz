import React from 'react'
import '../components/css/LoginForm.css'

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignup,
  hasAccount,
  successMsg,
  emailError,
  passwordError,
  sethasAccount
}) {
  return (
    <>
      <section className="login">
        {successMsg && <>
          <p>{successMsg}</p>
        </>}
        <div className="loginContainer">
          <label>Email Id</label>
          <input type="text" autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="errorMsg">
            {emailError}
          </p>
          <label>Password</label>
          <input type="password" required value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMsg">
            {passwordError}
          </p>
          <div className="btnContainer">
            {hasAccount ?
              (
                <>
                  <button className='signInBtn' onClick={handleLogin}>Sign In</button>
                  <p>Don't have an account ?
                    <span onClick={() => sethasAccount(!hasAccount)}>Sign Up</span>
                  </p>
                </>
              ) :
              (
                <>
                  <button className='signInBtn' onClick={handleSignup}>Sign Up</button>
                  <p>Have an account ?<span onClick={() => sethasAccount(!hasAccount)}>Sign in</span>
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