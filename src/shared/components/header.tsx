import { Link } from "react-router"

function Brand() {
  return (
    <Link
      to={"/"}
      className="flex items-center justify-center h-10 w-10 bg-secondary text-secondary-foreground text-sm rounded-2xl transition-all duration-300 font-medium hover:-translate-y-1"
    >
      <i className="fi fi-sc-bookmark" />
    </Link>
  )
}

function Actions() {
  return <div className="flex items-center gap-3"></div>
}

export function Header() {
  return (
    <header className="flex items-center justify-between h-24 laptop:h-40">
      <Brand />
      <Actions />
    </header>
  )
}
