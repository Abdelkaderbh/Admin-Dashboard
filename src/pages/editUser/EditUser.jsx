import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'


const EditUser = () => {
  return (
    <div className='editUser'>
        <div className="EditTitleContainer">
            <h1 className="EditTitle">Edit User</h1>
            <Link to ="/newUser" >
            <button className="createUser">Create</button>
            </Link>
        </div>

        <div className="userContainer">
            <div className="userDisplay">
                <div className="userTop">
                    <img src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x" alt="" className='userDisplayImg'/>
                    <div className="userDetails">
                        <span className="username">John Snow</span>
                        <span className="userTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userBottom">
                    <span className="UserEditTitle">
                        Account Details </span>
                        <div className="userShowInfo">
                        <PermIdentity className='userIcon'/>    
                            <span className="userEditTitle"> john9663 </span>
                        </div>

                        <div className="userShowInfo">
                        <CalendarToday className='userIcon'/>    
                            <span className="userEditTitle"> 10/10/1990 </span>
                        </div>  

                        <span className="UserEditTitle">
                        Contact Details </span>

                        <div className="userShowInfo">
                        <PhoneAndroid className='userIcon'/>    
                            <span className="userEditTitle"> +152366677 </span>
                        </div>

                        <div className="userShowInfo">
                        <MailOutline className='userIcon'/>    
                            <span className="userEditTitle"> john9663@gmail.com </span>
                        </div>

                        <div className="userShowInfo">
                        <LocationSearching className='userIcon'/>    
                            <span className="userEditTitle"> California </span>
                        </div>
                </div>
            </div>
            <div className="userUpdate">
                <div className="userUpdateTitle">Edit</div>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateL">
                        <div className="userUpdateItem">
                            <label> Username </label>
                            <input type="text" placeholder='john9663' className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label> Full Name </label>
                            <input type="text" placeholder='John Snow' className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label> Email </label>
                            <input type="text" placeholder='john9663@gmail.com' className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label> Phone Number </label>
                            <input type="text" placeholder='+152366677' className='userUpdateInput'/>
                        </div>

                        <div className="userUpdateItem">
                            <label> Adresse </label>
                            <input type="text" placeholder='California' className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateR">
                        <div className="userUpdateUp">
                            <img src="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x" className='userUpdateImg' />
                            <label htmlFor="file"> <Publish className='Up' /> </label>
                            <input type="file" name="" id="file" style={{display:"none"}}/>
                        </div>
                        <button className='UpdateBtn'> Update</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default EditUser