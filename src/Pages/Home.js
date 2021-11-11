import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HddStack, CodeSlash } from "react-bootstrap-icons";
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
    title: ["Frontend", <CodeSlash />],
    text: [
      "I enjoy to design and build user friendly interface with minimalist design.",
    ],
  },
];

const backendIntro = [
  {
    title: ["Backend", <HddStack />],
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
      <Container fluid="md">
        <Row>
          <Col className="text-center">
            <img src="/images/coding_img.png" alt="coding_img" id="codimg" />
          </Col>
        </Row>
      </Container>
      <Container fluid="md">
        <Row>
          <Col lg="6" sm="6" className="text-center">
            <div className="wrapper">
              {frontendIntro.map((item) => (
                <IntroSkills title={item.title} text={item.text} />
              ))}
              {frontendSkills.map((item) => (
                <Skills title={item.title} list={item.list} />
              ))}
            </div>
          </Col>
          <Col lg="6" sm="6" className="text-center ">
            <div className="wrapper">
              {backendIntro.map((item) => (
                <IntroSkills title={item.title} text={item.text} />
              ))}
              {backendSkills.map((item) => (
                <Skills title={item.title} list={item.list} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Home;
