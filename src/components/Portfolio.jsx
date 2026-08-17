import ProjectCard from './ProjectCard'

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-content">
        <p className="subtitle">MEUS PROJETOS</p>

      <h2>Portfólio</h2>

      <div className="projects">

      <ProjectCard
        nome="Hack and Slash"
        disciplina="Introdução à Programação"
        descricao="Hack and Slash é um jogo de ação e plataforma 2D ambientado em um mundo cyberpunk, combinando elementos tecnológicos futuristas com uma estética inspirada no Y2K."
        objetivo="Desenvolver um jogo 2D aplicando conceitos de programação estudados na disciplina."
        imagens={["/images/hack-and-slash.png",
          "/images/hack2.png"
        ]}
      />

      <ProjectCard
        nome="Mapeia"
        disciplina="CAD - Concepção de Artefatos Digitais"
        descricao="Plataforma interinstitucional para mapeamento, análise e gestão de propriedades abandonadas ou em situação de risco na cidade do Recife."
        objetivo="Foi desenvolvida com o intuito de facilitar a ação integrada em imóveis fechados transformando a invisibilidade em dados georreferenciados e estruturados."
        imagens={["/images/mapeiaa.jpeg",
          "/images/mapeiaa2.png"
        ]}
      />

        </div>
      </div>
    </section>
  )
}

export default Portfolio