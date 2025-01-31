import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import {
  HeroSection,
  ProjectSection,
  SupportSection,
  TeamSection,
} from '@features/landing'

export const metadata: Metadata = {
  title: 'The House for Better Software | Moono',
  description: 'The house for better software, products and apps',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'The House for Better Software | Moono',
    description: 'The house for better software, products and apps',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'The House for Better Software | Moono',
    description: 'The house for better software, products and apps',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <TeamSection />
      <ProjectSection />
      <SupportSection />
    </div>
  )
}
