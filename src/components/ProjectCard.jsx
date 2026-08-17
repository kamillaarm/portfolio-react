function ProjectCard(props) {
  return (
    <article className="project-card">

      {props.imagens && (
  <div className="project-images">
    {props.imagens.map((imagem) => (
      <img src={imagem} alt={props.nome} />
    ))}
  </div>
)}
      

      <div className="project-info">

        <p className="project-discipline">
          {props.disciplina}
        </p>

        <h3>{props.nome}</h3>

        <p>{props.descricao}</p>

        <p>
          <strong>Objetivo:</strong> {props.objetivo}
        </p>

      </div>

    </article>
  )
}

export default ProjectCard