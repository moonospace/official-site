import * as React from 'react'

export function HeroSection(): React.ReactElement {
  return (
    <section className="flex flex-col w-full mx-auto">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl tablet:text-3xl font-medium leading-normal!">
          Moono
        </h2>
        <p className="text-foreground/70 leading-relaxed!">
          <span className="italic text-fuchsia-600 dark:text-fuchsia-200">
            _The house for better software_
          </span>
        </p>
        <p className="text-foreground/70 leading-relaxed! text-pretty">
          Moono is collections of saas or software that are designed to be
          better than their competitors. We are a community of like-minded
          individuals who are passionate about improving the world through
          software.
        </p>
        <p className="text-foreground/70 leading-relaxed! text-pretty">
          We craft & build software, apps, and products to solve people
          problems. Really the world class problems. We start from research,
          design, and develop small application and focus on improve the apps
          along the way.
        </p>
        <p className="text-foreground/70 leading-relaxed! text-pretty">
          We have ambitions to provide better software with high quality to
          solve small specific problems and bring more impact to the users.
          We're trying to provide the best value that the user can have.
        </p>
      </div>
    </section>
  )
}
