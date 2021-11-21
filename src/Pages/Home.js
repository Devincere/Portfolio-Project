import React from "react";
import Skills from "../Components/Skills";
import IntroSkills from "../Components/Skills/intro";

const frontendSkills = [
  { title: "Languages", list: ["HTML5", "CSS3", "Sass", "Javascript"] },
  {
    title: "Developer tools",
    list: ["Visual Studio Code", "Atom", "Bootstrap", "React"],
  },
];

const backendSkills = [
  { title: "Languages", list: ["Ruby", "SQL"] },
  {
    title: "Developer tools",
    list: ["Visual Studio Code", "Atom", "Ruby on Rails"],
  },
];

const frontendIntro = [
  {
    title: ["Frontend", <i class="bi bi-code-slash skills-icon" />],
    text: [
      "I enjoy to design and build user friendly interface with minimalist design.",
    ],
  },
];

const backendIntro = [
  {
    title: ["Backend", <i class="bi bi-hdd-stack skills-icon" />],
    text: [
      "I like to add functionnalities using APIs to make websites dynamic and interactive.",
    ],
  },
];

const Home = () => (
  <div className="intro text-center">
    <h1 id="title">Full Stack Developper</h1>
    <h2>Passionate about tech 🖥 and creativity 🧠</h2>

    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <img src="/images/coding_img.png" alt="coding_img" id="codimg" />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-6 text-center">
            <div className="wrapper">
              {frontendIntro.map((item) => (
                <IntroSkills title={item.title} text={item.text} />
              ))}
              {frontendSkills.map((item) => (
                <Skills title={item.title} list={item.list} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 text-center ">
            <div className="wrapper">
              {backendIntro.map((item) => (
                <IntroSkills title={item.title} text={item.text} />
              ))}
              {backendSkills.map((item) => (
                <Skills title={item.title} list={item.list} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
