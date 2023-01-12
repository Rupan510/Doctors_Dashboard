/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ImgAsset from '../public';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Doctor_Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/people",
            name:"People",
            icon:<FaUserAlt/>
        },
        {
            path:"/appointments",
            name:"Appointments",
            icon:<FaRegChartBar/>
        },
        {
            path:"/amount",
            name:"Amount",
            icon:<FaCommentAlt/>
        },
        {
            path:"/feedback",
            name:"Feedback",
            icon:<FaShoppingBag/>
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<FaThList/>
        }
    ]
    return (
        <div className='contain'>
           <div style={{width: isOpen ? "200px" : "70px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               <img className='Doctor_image' src={ImgAsset.appointments_Rectangle591} alt="Doctor"/>
           </div>

           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
