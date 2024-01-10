import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Navbar'
import { db } from "../firebase"
import { useNavigate } from "react-router-dom";
import IndividualMyAds from "./IndividualMyAds"
import NoAds from "./NoAds"

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import "./css/CommonCss.css"

function MyAds({ user, handleLogOut }) {
  // state of Ads
  const [userAds, setUserAds] = useState([]);
  // const [loading,setLoading]=useState(false);
  const auth = getAuth();
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        db.collection("pets " + user.uid).onSnapshot((snapshot) =>
          setUserAds(snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data()
          })
          ))
        );
      }
      else {
        let path = `/`;
        navigate(path);
      }
    })
  }, [])

  return (
    <>
      <Navbar
        user={user}
        handleLogOut={handleLogOut}
      />
      <div className="white-font">
        <h1 className='title-size heading'>My Ads</h1>
      </div>
      <div className="full-height white-font main">
        {(userAds.length > 0) ? (
          <IndividualMyAds
            userAds={userAds}
            user={user}
            handleLogOut={handleLogOut}
          />
        ) : <NoAds userAds={userAds} />}
      </div>
    </>
  )

}

export default MyAds