import "./style.css";

const Skills = ({ title, list }) => (
  <div className="skills">
    <h3>{title}</h3>
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
