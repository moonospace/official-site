import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@shared/components"
import { Link } from "react-router"

export interface Project {
  name: string
  desc: string
  link: string
  label: string
}

interface ProjectItemProps {
  project: Project
}

export function ProjectItem({ project }: ProjectItemProps): React.ReactElement {
  const { name, desc, link, label } = project

  return (
    <li className="flex group">
      <Link to={link} target="_blank" className="flex items-center gap-2">
        <i className="fi fi-sc-check-circle transition-all duration-300 group-hover:scale-125" />

        <div className="group">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="cursor-pointer">
                <span>{name}</span> -{" "}
                <span className="text-foreground/60">{desc}</span>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Link>
    </li>
  )
}
