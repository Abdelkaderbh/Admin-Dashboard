import React from 'react'
import "./widgetSm.css"
import {Visibility} from "@material-ui/icons" 

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSmtitle">
            New Users
        </span>
        <ul className="SmList">
            <li className="SmListItem">
                <img src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x" alt="" className="WidgetSmImg" />
                <div className="widgetSmUser">
                    <span className="UserName">John </span>
                    <span className="UserTitle">Software Engineer </span>
                </div>
                <button className='WidgetSmButton'> <Visibility className='WidgetSmIcon'/> Display </button>
            </li>

            <li className="SmListItem">
                <img src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg" alt="" className="WidgetSmImg" />
                <div className="widgetSmUser">
                    <span className="UserName">Samy </span>
                    <span className="UserTitle">Software Engineer </span>
                </div>
                <button className='WidgetSmButton'> <Visibility className='WidgetSmIcon'/> Display </button>
            </li>

            <li className="SmListItem">
                <img src="https://s3media.247sports.com/Uploads/Assets/769/656/9656769.jpg" alt="" className="WidgetSmImg" />
                <div className="widgetSmUser">
                    <span className="UserName">Anna  </span>
                    <span className="UserTitle">Analitycal Engineer  </span>
                </div>
                <button className='WidgetSmButton'> <Visibility className='WidgetSmIcon' /> Display </button>
            </li>

        

        </ul>
        </div>
  )
}

export default WidgetSm