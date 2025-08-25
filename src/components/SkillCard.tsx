import { skills } from "../data/utils.ts";

const SkillCard = () => {
    console.log(skills.category);
    const skill_array = skills.value;
    console.log("array");
    console.log(skill_array);
    return (
        <>
        {skill_array.map((skill) => {
            console.log("test");
            console.log(skill.detail[0]);
            return (
                <article className="card elevate">
                    <h3 className="card-title">{skill.title}</h3>
                    <div className="card-divider"></div>
                    <div className="card-detail">
                        <p className="card-item">{skill.detail[0].topic}</p>
                        <p className="card-item">{skill.detail[1].topic}</p>
                        <p className="card-item">{skill.detail[2].topic}</p>
                    </div>
                    
                </article>
                
            );
        })}
        </>
    );
}

export default SkillCard;