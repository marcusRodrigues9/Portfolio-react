import "./styles.css";
import CardExperiencia from "./CardExperiencia";
import rw from '../../assets/rw.webp';
import intel from '../../assets/intel.png';

const experiencias = [
  { 
    id: 1, 
    nome: 'Rwtech', 
    icone: rw, 
    funcao: "Software Tester",
    periodo: "set 2025 - Atual",  // ← ADICIONE AQUI
    descricao: "Execução de testes funcionais em aplicações web e mobile. Elaboração de casos de teste, identificação de bugs e documentação de resultados. Trabalho em conjunto com desenvolvedores para garantir a qualidade do software."
  },
  { 
    id: 2, 
    nome: 'Intelbras', 
    icone: intel, 
    funcao: "Analista de Suporte Técnico",
    periodo: "jul 2024 - set 2025",  // ← ADICIONE AQUI
    descricao: "Atendimento e suporte técnico a clientes, diagnóstico e resolução de problemas em sistemas e equipamentos. Análise de logs, abertura de chamados e acompanhamento até a solução. Documentação de procedimentos e treinamento de usuários."
  },
];

export default function Experiencias() {
  return (
    <div className="container-experiencia" id="experiencias">
      <section className="cabecalho-experiencia">
        <h1>Experiências</h1>
        <p>Minha jornada na área da tecnologia</p>
      </section>
      
      <section className="experiencias-grid">
        {experiencias.map((exp) => (
          <CardExperiencia
            key={exp.id}
            icone={exp.icone}
            nome={exp.nome}
            funcao={exp.funcao}
            periodo={exp.periodo}  // ← PASSE O PERÍODO
            descricao={exp.descricao}
          />
        ))}
      </section>
    </div>
  );
}