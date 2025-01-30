import * as React from 'react'

interface ArticleContentProps {
  children: React.ReactNode
}

interface ProtectedHtmlContentProps {
  children: string
}

/**
 * ## ArticleContent
 *
 * Predefined component that allow to styling the article and documents
 * using the advantages of `tailwindcss typography`
 *
 * @returns {React.ReactElement}
 */
export function ArticleContent({
  children,
}: ArticleContentProps): React.ReactElement<any> {
  return (
    <article className="prose max-w-none overflow-hidden">{children}</article>
  )
}

/**
 * ## ProtectedHtmlContent
 *
 * Protect and secure the parsing of string html
 * @param children the string content that passed as html
 * @returns {React.ReactElement}
 */
export function ProtectedHtmlContent({
  children,
}: ProtectedHtmlContentProps): React.ReactElement<any> {
  // The content that passed throgh the elements
  const content = { __html: children }

  return <div dangerouslySetInnerHTML={content}></div>
}
