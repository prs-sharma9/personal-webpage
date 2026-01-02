const Header = () => {
  return (
    <header>
      <nav className="fixed top-0 z-50 w-full tranision-all duration-300 bg-primary/50 backdrop-blur-sm border-b border-primary/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-5 md:justify-between items-center h-14 sm:h-16 md:h-20">
            <div
              className="flex items-center space-x-4 group cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-text-primary"
                src="images/profileimg.jpeg"
                alt="Profile image of Prashant Sharma"
              />
              <p className="hidden md:block font-semibold text-xl text-text-primary">
                <span>Prashant </span>
                <span className="text-text-secondary/60">Sharma</span>
              </p>
            </div>

            <div id="nav-bar" className="flex space-x-3">
              <a
                href="#experience-section"
                className="text-text-primary/80 font-bold text-md sm:text-xl hover:text-text-primary hover:scale-105 transition-all duration-300"
              >
                Experience
              </a>
              <a
                href="#projects-section"
                className="text-text-primary/80 font-bold text-md sm:text-xl hover:text-text-primary hover:scale-105 transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact-section"
                className="text-text-primary/80 font-bold text-md sm:text-xl hover:text-text-primary hover:scale-105 transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        {/* <ul className="navMenu">
          <li className="navItem">Home</li>
          <li className="navItem">Projects</li>
          <li className="navItem">Contact</li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
