import React from 'react'
// import {useNavigate} from "react-router-dom"
import "./Ads.css"


function Ads({age,gender,imgUrl,petName,type,breed,user,contactNo,Address}) {
  
  // const [openPopup,setOpenPopup]=useState(false);
    const handleContactOwner=()=>{
     if(!user){
      alert("Please Login First!!")
     }
      else{
       alert(`Phone: ${contactNo}
Address:  ${Address}`)
      }
    }
  return (
    <>
    <div className="card">
        <div className="pet_image">
            <img src={imgUrl} alt="pet-image" height="125px" width="200px "/>
        </div>
        <div className="title">{petName}</div>
        <div className="data">
        <p>Breed: {breed}</p>
        <p>Gender: {gender}</p>
        <p>Age: {age}</p>
        </div>
        <button onClick={handleContactOwner}> Contact Owner </button>
    </div>
    </>
  )
}

export default Ads