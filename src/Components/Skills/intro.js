import "./style.css";

const IntroSkills = ({ title, text }) => (
  <div className="introSkills">
    <h3 className="title-skills">{title}</h3>
    <p>{text}</p>
  </div>
);

export default IntroSkills;
