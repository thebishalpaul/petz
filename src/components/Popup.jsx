import React from 'react'
import { Dialog,DialogContent } from '@mui/material'
import "../components/css/Popup.css"

function Popup({children,openPopup}) {
  return (
    <>
      <Dialog open={openPopup}>
        <DialogContent>
           {children}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Popup