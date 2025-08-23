import type { JSX } from "react";
import { NavLink } from "react-router";

function Navbar() : JSX.Element {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
