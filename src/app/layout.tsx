import * as React from 'react'
import type { Metadata } from 'next'
import { config, sharedMetadata } from '@shared/libs'
import { fonts } from '@shared/libs'
import '@shared/styles/globals.css'
import '@flaticon/flaticon-uicons/css/all/all.css'
import {
  AnimationProvider,
  PosthogProvider,
  ThemeProvider,
} from '@shared/providers'
import { CenteredLayout, Footer, Header } from '@shared/components'

export const metadata: Metadata = {
  title: 'The House for Better Software | Moono',
  description: 'The house for better software, products and apps',
  applicationName: 'Moono',
  keywords: [
    'Apps',
    'Software',
    'Product',
    'Teams',
    'Indie Hacker',
    'Indie Maker',
    'Indie Entrepreneur',
  ],
  publisher: 'Moono',
  creator: 'Moono',
  authors: [{ name: 'Nyoman Sunima', url: 'https://nyomansunima.one' }],
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
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement<any> {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.inter.variable}`}
    >
      <PosthogProvider>
        <AnimationProvider>
          <body suppressHydrationWarning>
            <ThemeProvider
              defaultTheme="system"
              attribute={'class'}
              disableTransitionOnChange
              enableSystem
            >
              <CenteredLayout>
                <Header />
                <main className="min-h-screen pt-0 pb-28 tablet:pb-36">
                  {children}
                </main>
                <Footer />
              </CenteredLayout>
            </ThemeProvider>
          </body>
        </AnimationProvider>
      </PosthogProvider>
    </html>
  )
}
