import SkillCard from './SkillCard';
import './styles.css';  // ← IMPORTAR O CSS
import spring from '../../assets/spring.png'
import java from '../../assets/java.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import pg from '../../assets/pg.png'
import git from '../../assets/git.png'
import jira from '../../assets/jira.png'

const technologies = [
  { id: 1, name: 'React', icon: react},
  { id: 2, name: 'JAVA', icon: java },
  { id: 3, name: 'NODE', icon: node},
  { id: 4, name: 'POSTGREE', icon: pg},
  { id: 5, name: 'SPRING BOOT', icon: spring},
  { id: 6, name: 'GIT', icon: git},
  { id: 6, name: 'JIRA', icon: jira},
];

export default function Tecnologias(){
  return (
    <section className="tecnologias-section" id='stacks'>
      <h1 className="tecnologias-title">
        Tecnologias utilizadas
      </h1>
      
      <div className="tecnologias-grid">
        {technologies.map((tech) => (
          <SkillCard 
            key={tech.id}
            name={tech.name}
            icon={tech.icon}
          />
        ))}
      </div>
    </section>
  );
}