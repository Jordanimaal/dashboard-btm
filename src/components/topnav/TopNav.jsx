import React from 'react'
import './topnav.css'
import Dropdown from '../dropdown/Dropdown'
import notifications from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/me.png'
import user_menu from '../../assets/JsonData/user_menus.json'
import { Link } from 'react-router-dom'

const curr_user = {
    display_name : "Jordan Corailler",
    image : user_image 
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" /> 
        </div>
        <div className="topnav__right-user__name">
           {user.display_name}
        </div>
    </div>
)

const Topnav = () => {
    return (
        <div className="topnav">
            <div className="topnav__search">
                <input type="text" placeholder='Rechercher ici...' />
                <i className="bx bx-search"></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    <Dropdown 
                        customToggle={() => renderUserToggle(curr_user)}

                    />
                    { /* dropdown */}
                </div>
                <div className="topnav__right-item">
                <Dropdown 
                    icon='bx bx-bell'
                    badge='12'
                    contentData={notifications}
                    renderItems={(item, index) => renderNotificationItem(item, index)}
                    renderFooter={() => <Link to='/'>View all</Link>}
                />
                    { /* dropdown */}
                </div>
                <div className="topnav__right-item">
                <Dropdown />
                    { /* change theme */}
                </div>
            </div>
        </div>
    )
}

export default Topnav
