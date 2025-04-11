//#region IMPORTS
//*REACT
import React from 'react'
//*ADDONS
import { useNavigate } from 'react-router-dom'
//*CSS
import './navbar.css';
//#endregion

const DropDown = ({ submenu }) => {
    //#region HOOKS
    let navigate = useNavigate();
    //#endregion

    //#region HTML
    return (
        <ul className='submenu'>
            {submenu.map((item) => {
                return (
                    <li key={item.id}>
                        <span href={item.url} className='submenuItem' onClick={() => { navigate(item.url) }}>{item.title.toUpperCase()}</span>
                    </li>
                )
            })}
        </ul>
    )
    //#endregion
}

export default DropDown;