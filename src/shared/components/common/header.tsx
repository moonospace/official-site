import * as React from 'react'
import Link from 'next/link'

function Brand(): React.ReactElement {
  return (
    <Link
      href={'/'}
      className="flex items-center text-sm transition-all duration-300 font-medium hover:-translate-y-1"
    >
      moono.space
    </Link>
  )
}

function Actions(): React.ReactElement {
  return <div className="flex items-center gap-3"></div>
}

export function Header(): React.ReactElement<any> {
  return (
    <header className="flex items-center justify-between h-24 laptop:h-40">
      <Brand />
      <Actions />
    </header>
  )
}
