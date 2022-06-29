import MyAdsOperations from "./MyAdsOperations"
import React from 'react'

function IndividualMyAds({userAds,userId,handleLogOut,user}) {
  return userAds.map((element)=>(
        <MyAdsOperations
           key={element.ID}
           element={element}
           user={user}
           handleLogOut={handleLogOut}
        />
  )  
 )
}

export default IndividualMyAds