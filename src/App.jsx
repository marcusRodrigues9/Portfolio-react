import './App.css'
import Experiencias from './components/experiencias'
import Footer from './components/footer'
import Header from './components/header'
import Projetos from './components/projetos'
import SobreMim from './components/sobre-mim'
import Tecnologias from './components/tecnologias'

function App() {
  return (
    <>
      <Header />

      <SobreMim />
      <Tecnologias />
      <Experiencias />
      <Projetos />
      <Footer />
    </>
  );
}

export default App;
