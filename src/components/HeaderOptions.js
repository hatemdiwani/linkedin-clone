import React from 'react'
import '../styles/headeroptions.css'
import Avatar from '@material-ui/core/Avatar';

function HeaderOptions({avatar ,Icon ,title}) {
    return (
        <div className="header-option">
            {Icon && <Icon className="header-option-icon"/>}
            {avatar && <Avatar src={avatar} className="header-option-icon"/>}
            <h3 className="header-option-title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
