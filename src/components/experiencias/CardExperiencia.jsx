import React from "react";
import "./styles.css";

export default function CardExperiencia({ icone, nome, funcao, periodo, descricao }) {
  return (
    <div className="container-experiencia-card">
      <div>
        <img src={icone} alt={nome} className="experiencia-logo" />
      </div>
      
      {/* Conteúdo na direita em coluna */}
      <div className="experiencia-header">
        <div className="experiencia-info">
          <div className="experiencia-titulo">
            <h3 className="experiencia-empresa">{nome}</h3>
            <span className="experiencia-periodo">{periodo}</span>
          </div>
          <p className="experiencia-funcao">{funcao}</p>
        </div>
        <p className="experiencia-descricao">{descricao}</p>
      </div>
    </div>
  );
}