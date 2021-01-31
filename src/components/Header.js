import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import '../styles/header.css'
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import hatemavatar from '../assets/hatem.jpg'
import linkedin from '../assets/linkedin.png'

function Header() {
    return (
        
            <div className="header">

            <div className="header-left">
                <img src={linkedin} alt=""/>

                <div className="header-search">
                <SearchIcon/>
                <input type="text" name="" id=""/>
                </div>
        
            </div>

            <div className="header-right">
                <HeaderOptions Icon={HomeIcon} title='Home'/>
                <HeaderOptions Icon={SupervisorAccountIcon} title='Network'/>
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOptions Icon={ForumIcon} title='Messeging'/>
                <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOptions avatar={hatemavatar} title='hatem'/>
            </div>
        </div>
       
        
    )
}

export default Header
