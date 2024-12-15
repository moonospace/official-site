import * as React from 'react'

export function SupportSection(): React.ReactElement {
  return (
    <section className="flex flex-col w-full mx-auto">
      <div className="flex flex-col gap-6">
        <p className="text-foreground/70 !leading-relaxed text-pretty">
          We are open for contributions and support. You can donate or backed
          the product. We are always looking for contributors and supporters.
        </p>
      </div>
    </section>
  )
}
