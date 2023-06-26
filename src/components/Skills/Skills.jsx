import { useState } from 'react';
import './Skills.css'
import { useEffect } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect (()=>{
        fetch('/skills.json')
        .then(res=>res.json())
        .then(data=> setSkills(data))
    }, [])
 
    return (
        <section className='skills section' id='skills'>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                {
                    skills.map(singleSkill => <Skill key={singleSkill._id} singleSkill={singleSkill}/>)
                }
            </div>
        </section>
    );
};

export default Skills;