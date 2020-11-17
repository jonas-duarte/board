import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import GarageDoor from "../../components/GarageDoor";
import ProjectViewer from "../ProjectViewer";

import "./styles.scss";
import ThemeConsumer, { ThemeProvider } from "../../components/Theme";
import StyleParser from "../../components/StyleParser";

const Home = () => {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        {({ textColor }) => (
          <div style={{ height: "100vh", width: "100vw" }}>
            <GarageDoor
              info={
                <>
                  <div className="contact-me">
                    {[
                      {
                        icon: faLinkedin,
                        href:
                          "https://www.linkedin.com/in/jonas-rafael-duarte-dos-santos-7b8803105/",
                      },
                      {
                        icon: faGithub,
                        href: "https://github.com/jonas-duarte",
                      },
                      {
                        icon: faEnvelope,
                        href: "mailto:jonasrdsantos@gmail.com",
                      },
                    ].map(({ icon, href }, i) => (
                      <StyleParser key={i}>
                        <a
                          href="https://www.linkedin.com/in/jonas-rafael-duarte-dos-santos-7b8803105/"
                          rel="noreferrer"
                          target="_blank"
                          style={{
                            boxShadow: `0 0 3px 3px ${textColor}`,
                            active: { boxShadow: `0 0 5px 5px ${textColor}` },
                          }}
                        >
                          <FontAwesomeIcon icon={icon} />
                        </a>
                      </StyleParser>
                    ))}
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
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
};

export default Home;
