import React from "react";
import s from './Header.module.css';

function Header() {
    return(
        <div className={s.header}>
        <img src='https://www.weetechsolution.com/wp-content/uploads/2024/04/Electron-JS-vs-React-Native-vs-Node-JS-Which-is-Better-For-Cross-Platform-App-Development.jpg' />
        </div>
    )
}

export default Header;