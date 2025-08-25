import { SiLinkedin, SiLeetcode, SiGithub } from "react-icons/si";

function Footer() {
    return (
        <footer>
            <a className="social" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/prs-sharma9"><SiLinkedin /></a>
            <a className="social" href="https://leetcode.com/u/prashsharma88/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            <a className="social" href="https://github.com/prs-sharma9" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
        </footer>
    );
}
export default Footer;