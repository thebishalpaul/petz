import Home from './components/Home'
import LoginForm from './components/LoginForm'
import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
// import Popup from './components/Popup'
import DogCare from './components/DogCare';
import AddPet from './components/AddPet';
import MyAds from './components/MyAds';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, sethasAccount] = useState(false);
  // const [openPopup, setOpenPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const auth = getAuth();
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearError = () => {
    setEmailError('');
    setPasswordError('');
  }


  const handleLogin = () => {
    clearError();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in 
        alert("Log In Successfull!!");
        setIsModalOpen(false);
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;

          default:
        }
      });
  }

  const handleSignup = () => {
    clearError();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Sign Up Successfull!!")
        setIsModalOpen(false);
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
          case 'auth/internal-error':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;

          default:
        }
      });
  }

  const handleLogOut = () => {
    signOut(auth).then(() => {
      alert("logged out!!");
    }).catch((error) => {
      // An error happened.
      alert(error.message);
    });
  }
  const authListner = () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        clearInputs();
        setUser(user);
        setUserId(user.uid);
      }
      else {
        setUser("");
        setUserId(null);
      }
    })
  }

  // console.log(userId);
  useEffect(() => {
    authListner();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/"
          element={<Home
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            user={user}
            handleLogOut={handleLogOut}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            sethasAccount={sethasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />} />
        <Route path="/DogCare" element={<DogCare />} />
        <Route path="/AddPet" element={<AddPet
          user={user}
          handleLogOut={handleLogOut}
        />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/MyAds"
          element={<MyAds
            user={user}
            userId={userId}
            handleLogOut={handleLogOut}
          />} />
        <Route path='/AboutUs'
          element={<AboutUs
            user={user}
            userId={userId}
            handleLogOut={handleLogOut} />} />
        <Route path='/ContactUs'
          element={<ContactUs
            user={user}
            userId={userId}
            handleLogOut={handleLogOut} />} />
      </Routes>

      {/* <Button variant="contained" sx={{ background: "black" }}
        onClick={
          (e) => {
            e.preventDefault();
            setIsModalOpen(true)
          }
        }
      >Login</Button> */}
      {/* <Modal
        open={isModalOpen}
        closeIcon={closeIcon}
        onClose={() => setIsModalOpen(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}
      > */}
      {/* <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      > */}
      {/* <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          sethasAccount={sethasAccount}
          emailError={emailError}
          passwordError={passwordError}
          setIsModalOpen={setIsModalOpen}
        /> */}
      {/* </Popup> */}
      {/* </Modal> */}
    </>
  );
}
export default App
