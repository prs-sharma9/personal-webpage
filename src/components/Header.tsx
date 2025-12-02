import type { JSX } from "react";
import Navbar from "./Navbar";

function Header() : JSX.Element {
    return (
        <header className="bg-gray-800 text-center">
            <Navbar />
        </header>
    );
}

export default Header;