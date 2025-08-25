import SkillCard from "../components/SkillCard";

function Home() {
    return (
        <section id="intro" className="">
            <div>
                <p id="intro-txt">
                    Welcome to my portfolio! I'm a passionate developer with a strong focus on building modern, user-friendly applications. 
                    Explore my projects to see how I turn ideas into elegant and effective solutions.
                </p>
                <div id="skills-area">
                    <SkillCard />
                </div>
            </div>
        </section>
    );
}

export default Home;