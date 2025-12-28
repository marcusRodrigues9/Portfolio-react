import ProjectCard from './ProjectCard';
import './styles.css';
import encurtadorImg from '../../assets/encurtador.png'; // Substitua pelos seus prints
import todoImg from '../../assets/todolist.png';
import imuneImg from '../../assets/imune.png';

const projects = [
  {
    id: 1,
    title: 'Encurtador de URLs',
    description: 'API de encurtamento com expiração de 30 dias e contador de cliques.',
    image: encurtadorImg,
    techs: ['Spring Boot', 'Java', 'H2'],
    github: 'https://github.com/marcusRodrigues9/encurtador-url',
    demo: 'https://encurtador-url-navy.vercel.app'
  },
  {
    id: 2,
    title: 'Full Stack Todo List',
    description: 'Gerenciador de tarefas com status de conclusão e persistência de dados.',
    image: todoImg,
    techs: ['React', 'Spring Boot', 'PostgreSQL', 'H2'],
    github: 'https://github.com/marcusRodrigues9/Todolist-springboot-react',
    demo: 'https://spring-react-todo.vercel.app' // Link do Vercel
  },
    {
    id: 3,
    title: 'Imune Gestão - 2º lugar — FAITEC 🥈',
    description: 'Sistema de controle de estoque de vacinas',
    image: imuneImg,
    techs: ['java', 'javaFX', 'Json'],
    github: 'https://github.com/marcusRodrigues9/ImuneGestao',
    demo: 'https://github.com/marcusRodrigues9/ImuneGestao' // Link do Vercel
  }
];


export default function Projetos() {
  return (
    <section className="projetos-section" id='projetos'>  
      <h1 className="tecnologias-title">Projetos</h1>
      
      <div className="projetos-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}