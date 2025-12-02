import type { JSX } from "react";
import { NavLink } from "react-router";

function Navbar() : JSX.Element {
    return (
        <>
            <nav>
                <ul className="flex justify-center items-center gap-4 py-8 text-white font-bold">
                    <li className="text-3xl"><NavLink to='/'>Home</NavLink></li>
                    <li className="text-3xl"><NavLink to='/projects'>Projects</NavLink></li>
                    <li className="text-3xl"><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
