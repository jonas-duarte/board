import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import GarageDoor from "../../components/GarageDoor";
import ProjectViewer from "../ProjectViewer";

import "./styles.scss";
import { ThemeProvider } from "../../components/Theme";

const Home = () => {
  return (
    <ThemeProvider>
      <div style={{ height: "100vh", width: "100vw" }}>
        <GarageDoor
          info={
            <>
              <div className="contact-me">
                <a
                  href="https://www.linkedin.com/in/jonas-rafael-duarte-dos-santos-7b8803105/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/jonas-duarte"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="mailto:jonasrdsantos@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
              <div className="my-infos">
                <div>JONAS DOS SANTOS</div>
                <div>PORTFOLIO</div>
              </div>
            </>
          }
        >
          <ProjectViewer></ProjectViewer>
        </GarageDoor>
        {/* Antes de exibir os projetos, fazer uma tela tipo de apresentação com meu nome e meu 
        contato, que eu aperto um botão, ela sobe e se esconde (ver como animar isso) */}
        {/* Fazer layout estilo menu do dino crisys */}
        {/* Lista com os projetos */}
        {/* <div>Project list</div> */}
        {/* Painel com os projetos */}
        {/* <div>Project viewer (Process drag-n-drop)</div> */}
      </div>
    </ThemeProvider>
  );
};

export default Home;
