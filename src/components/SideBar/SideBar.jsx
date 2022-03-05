import React from 'react'
import { LineStyle,Timeline,TrendingUp,PermIdentity, Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,} from '@material-ui/icons' ; 
import './SideBar.css'



const SideBar = () => {
  return (
    <div className='sidebar'>

        <div className="sidebarWrapper"> 
            <div className="sidebarMenu">
                <h3 className="Title"> Dashboard  </h3>
                    <ul className="sideBarList">
                        <li className="sidebarListItems">
                            <LineStyle className='sideBarIcon'/> Home
                        </li>

                        <li className="sidebarListItems">
                            <Timeline className='sideBarIcon'/> Analytics
                        </li>

                        <li className="sidebarListItems">
                            <TrendingUp className='sideBarIcon'/> Sales 
                        </li>
                    </ul>
            </div>  

            <div className="sidebarMenu">
                <h3 className="Title"> Quick Menu  </h3>
                    <ul className="sideBarList">
                        <li className="sidebarListItems">
                            <PermIdentity  className='sideBarIcon'/> Users
                        </li>

                        <li className="sidebarListItems">
                            <Storefront className='sideBarIcon'/> Products
                        </li>

                        <li className="sidebarListItems">
                            <AttachMoney className='sideBarIcon' /> Transactions 
                        </li>

                        <li className="sidebarListItems">
                            <BarChart className='sideBarIcon' /> Reports 
                        </li>
                    </ul>
            </div> 
           
            <div className="sidebarMenu">
                <h3 className="Title"> Notifications  </h3>
                    <ul className="sideBarList">
                        <li className="sidebarListItems">
                            <MailOutline  className='sideBarIcon'/> Mail
                        </li>

                        <li className="sidebarListItems">
                            <DynamicFeed className='sideBarIcon'/> Feedback
                        </li>

                        <li className="sidebarListItems">
                            <ChatBubbleOutline className='sideBarIcon' /> Messages 
                        </li>
                    </ul>
            </div> 
        </div>
    </div>
  )
}

export default SideBar