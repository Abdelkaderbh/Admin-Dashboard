import React from 'react'
import "./navbar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';


function Navbar() {
  return (
    <div className='navbar'>
    <div className="navbarWrapper">
        <div className="left">
         <span className='logo'> Giro Admin</span>
        </div>

        <div className="right">
            <div className="topbarIconContainer">
                <NotificationsNone />
                <span className="topIconBag"> 2 </span>
            </div>

            <div className="topbarIconContainer">
                <Language />
                <span className="topIconBag"> 4 </span>
            </div>

            <div className="topbarIconContainer">
                <Settings />
            </div>

        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="avatar" />

        </div>

    </div>
    </div>
  )
}

export default Navbar