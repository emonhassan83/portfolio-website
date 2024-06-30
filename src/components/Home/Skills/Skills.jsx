import { useState } from 'react';
import './Skills.css'
import { useEffect } from 'react';
import Skill from './Skill';
import { useTheme } from '../../../lib/ThemeProvider';


const Skills = () => {
    const [skills, setSkills] = useState([]);
    const { theme } = useTheme(); //* use for dark and light themes

    useEffect (()=>{
        fetch('/skills.json')
        .then(res=>res.json())
        .then(data=> setSkills(data))
    }, [])
 
    return (
        <section className={`skills section ${
            theme.mode === "dark" ? "dark-bg-color text-gray-100" : "bg-color"
          }`} id='skills'>
            <h2 className={`section__title ${
            theme.mode === "dark" ? "text-gray-100" : "text__color"
          }`}>Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                {
                    skills.map((singleSkill, index) => <Skill key={index} singleSkill={singleSkill}/>)
                }
            </div>
        </section>
    );
};

export default Skills;