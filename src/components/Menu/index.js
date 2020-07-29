import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css'
import Button from "../Button";
import { Link } from "react-router-dom";



function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} alt="HarryFlixLogo" className="Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;

