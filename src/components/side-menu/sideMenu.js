import React from 'react'
import { NavLink } from 'react-router-dom';
import './sideMenu.scss';

class SideMenu extends React.Component {
    
    
    render() {
        return (
            <div className="side-menu-container">
                <ul>
                    <li><NavLink to="/welcome" activeClassName="selected">Welcome</NavLink></li>
                    <li><NavLink to="/box" activeClassName="selected">Box</NavLink></li>
                    <li><NavLink to="/settings" activeClassName="selected">Settings</NavLink></li>
                </ul>
            </div>
        )
    }
};

export default SideMenu;