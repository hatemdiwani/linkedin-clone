import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../styles/sidebar.css'
import backgroundcover from '../assets/background.jpg'
import { makeStyles } from '@material-ui/core/styles';

function Sider() {
    const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));
const classes = useStyles();
    return (
        <div className="sidebar">
            <div className="sidebar-top-section">
                <img src={backgroundcover} alt=""/>
                <Avatar className={`sidebar-avatar ${classes.large}`}/>
                <a href="/in/hatem">hatem diwani</a>
                <h4>hatem.diouani@gmail.com</h4>
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Profile viewed</p>
                    <p className="view-number">99</p>
                </div>
                <div className="sidebar-stat">
                    <p>RSelations</p>
                    <p className="view-number">99</p>
                </div>
            </div>

            <div className="sidebar-bottom-section">
hrhh
            </div>
        </div>
    )
}

export default Sider
