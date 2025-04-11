//#region IMPORTS
//*React
import React, { useState } from 'react';
//*Addons
import { useNavigate } from 'react-router-dom';
//*Components
import DropDown from './DropDown';
//*Css
import './navbar.css';
//*Files
import Logo from '../../Assets/MyLogoWhite.png';
//#endregion

function Navbar() {
  //#region VARIABLES
  const linkedinUrl = "https://www.linkedin.com/in/hector-lopez-gonzalez/";
  //#region MenuItems
  const menuItems = [
    {
      id: 0,
      title: 'Home',
      url: "/",
      submenu: [],
    },
    {
      id: 1,
      title: 'About Me',
      url: "/about",
      submenu: [
        {
          id: 10,
          title: "About Me",
          url: "/about",
        },
        {
          id: 11,
          title: "Digital Resume",
          url: "/digitalcv",
        },
      ],
    },
    {
      id: 2,
      title: 'Projects',
      url: "/projects",
      submenu: [
        {
          id: 20,
          title: "All Projects",
          url: "/allprojects",
        },
        {
          id: 21,
          title: "Advanced Control Systems",
          url: "/control",
        },
        {
          id: 22,
          title: "Embedded Systems",
          url: "/embedded"
        },
        {
          id: 23,
          title: "Industrial Automation",
          url: "/automation",
        },
        {
          id: 24,
          title: "Virtual Reality",
          url: "/vr",
        },
        {
          id: 25,
          title: "Research",
          url: "/research",
        },
        {
          id: 26,
          title: "Publications",
          url: "/publications",
        },
      ],
    },
    {
      id: 3,
      title: 'Contact',
      url: "/contact",
      submenu: [],
    },
    {
      id: 4,
      title: 'Email',
      url: 'mailto: hec.lopezgonzalez@gmail.com',
      submenu: [],
      icon: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z",
      altText: "Email",
    },
    {
      id: 5,
      title: 'Linkedin',
      url: linkedinUrl,
      submenu: [],
      icon: "M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z",
      altText: "Linkedin",
    },
  ];
  //#endregion
  //#endregion

  //#region HOOKS
  let navigate = useNavigate();
  const [showSubmenu, setShowSubmenu] = useState([]);
  //#endregion

  //#region FUNCTIONS
  //*When mouse enters, open submenu
  const showSubmenuOnEnter = (e) => {
    setShowSubmenu((prev) => {
      let arr = [...prev];
      arr[e.id] = true;
      return arr;
    })
  }

  //*When mouse exists, close submenu
  const hideSubmenu = (e) => {
    setShowSubmenu((prev) => {
      let arr = [...prev];
      arr[e.id] = false;
      return arr;
    })
  }

  const goTo = (e) => {
    hideSubmenu(e);
    navigate(e.url);
  }
  //#endregion

  //#region HTML
  return (
    <nav>
      <img onClick={() => { navigate("/") }} src={Logo} alt='Logo' className='logo' />
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.id} onMouseEnter={() => showSubmenuOnEnter(item)} onMouseLeave={() => hideSubmenu(item)}>
              {item.icon === null || item.icon === undefined ?
                <p href={item.url} className='topMenuListItem' onClick={() => { goTo(item) }}>{item.title.toUpperCase()}</p>
                :
                <svg viewBox='0 0 1024 1024' fill='currentColor' className='navIcon' onClick={() => window.open(item.url, '_blank')}><path d={item.icon} /></svg>
              }
              {showSubmenu[item.id] && item.submenu.length > 0 ? <DropDown submenu={item.submenu} /> : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
  //#endregion
}

export default Navbar;