import Project from "./Project";
import { projects } from "../projects";
export default function Projects() {
  return (
    <section className="bg-bg" id="projects">
      <div className="container py-36">
        <h2 className="text-sec font-bold MB-4">PROJECTS</h2>
        <div>
          {projects.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
