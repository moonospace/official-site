import * as React from 'react'
import { Metadata } from 'next'
import { sharedMetadata } from '@shared/libs'
import { HeroSection } from '@features/landing'

export const metadata: Metadata = {
  title: 'Moono',
  description: 'The house for better software, products and apps',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Moono',
    description: 'The house for better software, products and apps',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Moono',
    description: 'The house for better software, products and apps',
  },
}

export default function HomePage(): React.ReactElement {
  return (
    <div className="px-5 laptop:px-0 container mx-auto">
      <HeroSection />
    </div>
  )
}
