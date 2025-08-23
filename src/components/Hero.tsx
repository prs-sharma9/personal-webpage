import profileimg from "../assets/images/profileimg.jpeg";

function Hero() {
    return (
        <section id="hero-section" className="m5-btm">
            <div id="hero-content">
                <img src={profileimg} alt="Image of Prashant" />
                <h2 className="titleTxt">Hi there! I am Prashant...</h2>
                <p>text</p>
            </div>
            <p id="hero-img-description">Calgary Downtown</p>
        </section>
    );
}

export default Hero;