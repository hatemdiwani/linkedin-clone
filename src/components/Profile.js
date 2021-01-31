import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';


function Profile() {
    
    return (
        <div className="profile">
            <img src="" alt="" className="cover"/>
            <div className="avatar">
                <Avatar/>
                <CreateIcon/>
            </div>
            <div className="about">
                <h3>hatem diwani</h3>
                <h4>profile title</h4>

            </div>
        </div>
        
    )
}

export default Profile
