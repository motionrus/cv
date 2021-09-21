import React from 'react';
import "./style.scss"

const skills = [
  "Python",
  "Linux",
  "Django Framework",
  "JavaScript",
  "Bash",
  "Git",
  "HTTP",
  "REST",
  "TCP/IP",
  "SQL",
  "NoSQL",
  "ORM",
  "Bootstrap",
  "Pyramid",
  "MVC",
  "Kubernetes",
  "Konva.js",
  "Docker",
  "Jenkins",
]

const Skills = () => {

  return (
    <div className="skills" id="skills">
      <div className="width-limit-container">
        <h1 className="title skills__title">Skills</h1>
        <ul className="common-list skills__list">
          <li>Passionate about new technologies and best practices</li>
          <li>I am not indifferent to modern software development techniques</li>
        </ul>
        <div className="skills__tag-list">
          {skills.map((skill, index) => (
            <div className="common-tag" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Skills;