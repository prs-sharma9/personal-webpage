import { SiLinkedin, SiLeetcode, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <section id="contact-section" className="h-12 bg-red-400">
      <footer className="flex items-center justify-around h-full w-full">
            <a className="social" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/prs-sharma9"><SiLinkedin /></a>
            <a className="social" href="https://leetcode.com/u/prashsharma88/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
            <a className="social" href="https://github.com/prs-sharma9" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
        </footer>
    </section>
  );
};

export default Footer;
