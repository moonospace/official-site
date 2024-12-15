import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components'
import Link from 'next/link'
import * as React from 'react'

export type Project = {
  name: string
  description: string
  link: string
  label: string
}

type ProjectItemProps = {
  project: Project
}

export function ProjectItem({ project }: ProjectItemProps): React.ReactElement {
  const { name, description, link, label } = project

  return (
    <li className="flex items-center gap-2">
      <i className="fi fi-sr-circle-small" />

      <div className="">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href={link} target="_blank" className="text-foreground">
                {name}
              </Link>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span> - {description}</span>
      </div>
    </li>
  )
}
