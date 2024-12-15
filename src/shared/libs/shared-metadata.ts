import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types'

const openGraph: OpenGraph = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1734266325002/6ec99c83-5d5d-4b37-a19d-def20e02f9f7.png',
  ],
  locale: 'en_US',
  type: 'website',
  siteName: 'Moono',
}

const twitter: Twitter = {
  images: [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1734266325002/6ec99c83-5d5d-4b37-a19d-def20e02f9f7.png',
  ],
  card: 'summary_large_image',
  creator: '@nyomansunima',
  site: 'Moono',
}

export const sharedMetadata = {
  openGraph,
  twitter,
}
