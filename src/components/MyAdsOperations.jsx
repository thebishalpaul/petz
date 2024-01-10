import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {db} from "../firebase"
import Ads from "./Ads"
import '../components/css/Ads.css'
import "../components/css/MyAdsOperations.css"

function MyAdsOperations({element,user}) {
    const auth = getAuth();
    const handleAdsDelete=()=>{
        onAuthStateChanged(auth,user=>{
            if(user){    
                db.collection('pets '+user.uid).doc(element.ID).delete().then(()=>{
                    console.log('successfully deleted');
                }) 
            }
        })
    }
    

  return (
    <>
    <div className='container-fluid'>
        <div className='products-box'>
         <Ads 
            age={element.age}
            gender={element.gender}
            imgUrl={element.imgUrl}
            petName={element.petName}
            type={element.type}
            breed={element.breed}
            user={user}
            contactNo={element.contactNo}
            Address={element.Address}
         />
         <button className='delAdsBtn' onClick={handleAdsDelete}>Adopted</button>
         </div>
        </div>
    </>
  )
}

export default MyAdsOperations