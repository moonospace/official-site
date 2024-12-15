import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@shared/components'
import Link from 'next/link'
import * as React from 'react'

export function TeamSection(): React.ReactElement {
  return (
    <section className="flex flex-col w-full mx-auto">
      <div className="flex flex-col gap-6">
        <p className="text-foreground/70 !leading-relaxed text-pretty">
          Moono was founded by{' '}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link
                  href={'https://nyomansunima.one'}
                  target="_blank"
                  className="inline-flex text-foreground font-medium transition-all duration-300"
                >
                  Nyoman Sunima
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                The creative founder and contributor
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>{' '}
          in 2024 as the publication for all of the software products that has
          been created. Everythig just start small until it become a thing and
          supported by people in the community.
        </p>
        <p className="text-foreground/70 !leading-relaxed text-pretty">
          Now, we just focus on shipping a high quality product that combine the
          team with community feedback and understand what they really needs and
          wants.
        </p>
      </div>
    </section>
  )
}
