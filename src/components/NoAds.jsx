import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function NoAds({userAds}) {
  // (userAds.length>0)? (
  return (
  <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center', height:"100vh"}}>
      <CircularProgress/>
  </Box>
  )
}
// ):("Post Ads to display!!")
export default NoAds