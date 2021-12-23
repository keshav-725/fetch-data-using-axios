import React from 'react'
import { FaHome, FaGraduationCap, FaIdBadge ,FaDotCircle} from "react-icons/fa"
import { CgProfile } from "react-icons/cg"
import { NavLink} from "react-router-dom"
import './nav.css'

const Nav = () => {
    return (
        <div className="navside animated flipInY">
            <NavLink
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "green"
                }}
            ><FaHome size="2.5rem" /><div className="itemName">Workshop</div></NavLink>
            <NavLink
                to="/dashboard"
                activeStyle={{
                    fontWeight: "bold",
                    color: "green"
                }}
            ><FaIdBadge size="2.5rem" /><div className="itemName">Event</div></NavLink>
            <NavLink
                to="/home1"
                activeStyle={{
                    fontWeight: "bold",
                    color: "green"
                }}
            ><FaGraduationCap size="2.5rem" /><div className="itemName">Shop</div></NavLink>
            <NavLink
                to="/home2"
                activeStyle={{
                    fontWeight: "bold",
                    color: "green"
                }}
            ><FaDotCircle size="2.5rem" /><div className="itemName">shop</div></NavLink>
            <NavLink
                to="/home3"
                activeStyle={{
                    fontWeight: "bold",
                    color: "green"
                }}
            ><CgProfile size="2.5rem" /><div className="itemName">shop</div></NavLink>
        </div>
    )
}

export default Nav
