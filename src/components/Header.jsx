import React from 'react'
import "../style/Header.scss";
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
        <h1>tech star</h1>
        <main>
            <HashLink to={"/"}>Home</HashLink>
            <Link to={"/contect"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brand"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>

    </nav>
  )
}

export default Header