import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Ads from './Ads'
import { db } from "../firebase"
import "./css/Home.css"
import "./css/CommonCss.css"
import SearchIcon from '@mui/icons-material/Search';

const Home = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignup,
  hasAccount,
  sethasAccount,
  emailError,
  passwordError,
  isModalOpen,
  setIsModalOpen,
  user,
  handleLogOut }) => {
  const [info, setInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // "ESYXOPqlJpZ48np8LfNivnh9pvc2"
  // ITNhjnYcEDUSxVdtYJtMTV9GnWI3
  // console.log(searchTerm);
  useEffect(() => {
    db.collection("pets ESYXOPqlJpZ48np8LfNivnh9pvc2").onSnapshot((snapshot) =>
      setInfo(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);


  return (
    <>
      <Navbar
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
      />
      <div className="searchDiv">
        <input type="text" placeholder="Search..." id="searchbox"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <SearchIcon fontSize="large" className="searchIcon" />
      </div>
      <div className='main bg-color full-height white-font'>
        {info.length < 1 && (
          <div className='loading'>Finding a pet for you...</div>
        )}

        {/* filter*********************** */}
        {info.filter((val) => {
          if (searchTerm === "")
            return val
          else if (val.type.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
          
          return 0;
        }
        ).map(
          ({ age, gender, imgUrl, petName, type, breed, contactNo, Address }, ID) => (
            <Ads
              key={ID}
              age={age}
              gender={gender}
              imgUrl={imgUrl}
              petName={petName}
              type={type}
              breed={breed}
              user={user}
              contactNo={contactNo}
              Address={Address}
            />
          )
        )}
      </div>
    </>
  );
}
export default Home;