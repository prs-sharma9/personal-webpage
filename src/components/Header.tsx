import type { JSX } from "react";
import Navbar from "./Navbar";

function Header() : JSX.Element {
    return (
        <header className="m5-btm">
            <Navbar />
        </header>
    );
}

export default Header;