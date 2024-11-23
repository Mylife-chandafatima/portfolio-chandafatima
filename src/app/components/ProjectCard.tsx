export default function ProjectCard({ project }) {
    return (
      <div className="card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    );
  }
  