const Project = ({ project }) => <li className='projectListItem'>
  <a href={project.link} className='projectImage'>
    <img src={`/projects/${project.image}.png`} srcSet={`/projects/${project.image}-2x.png 2x`} />
  </a>
  <div>
    <a href={project.link} className='projectTitle'>
      <h2>{project.title} ({project.year})</h2>
    </a>
    <h3>
      <p className='projectDescription' dangerouslySetInnerHTML={{__html: project.description }} />
      <ul className='projectTechList'>
        {project.tech.map((tech) =>
          <li className='projectTechListItem'>{tech}</li>
        )}
      </ul>
    </h3>
    {project.link &&
      <h4>
        <a href={project.link}>Visit {project.title}</a>
      </h4>
    }
  </div>
</li>

export default Project
