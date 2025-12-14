export interface Project {
  name: string;
  desc: string;
  link: string;
}

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps): React.ReactElement {
  const { name, desc, link } = project;

  return (
    <a className="flex items-center gap-1 py-1" href={link} target="_blank">
      <svg
        className="text-foreground/40"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12.1" cy="12.1" r="1" />
      </svg>
      <span>{name}</span> - <span className="text-foreground/60">{desc}</span>
    </a>
  );
}
