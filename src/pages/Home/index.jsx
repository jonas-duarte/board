import React from "react";
import GarageDoor from "../../components/GarageDoor";

const Home = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GarageDoor
        info={
          <>
            <div>JONAS DOS SANTOS</div>
            <div>PORTFOLIO</div>
          </>
        }
      ></GarageDoor>
      {/* Antes de exibir os projetos, fazer uma tela tipo de apresentação com meu nome e meu 
        contato, que eu aperto um botão, ela sobe e se esconde (ver como animar isso) */}
      {/* Fazer layout estilo menu do dino crisys */}
      {/* Lista com os projetos */}
      {/* <div>Project list</div> */}
      {/* Painel com os projetos */}
      {/* <div>Project viewer (Process drag-n-drop)</div> */}
    </div>
  );
};

export default Home;
