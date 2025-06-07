import { Link } from "react-router"

function Brand() {
  return (
    <Link
      to={"/"}
      className="flex items-center text-sm transition-all duration-300 font-medium hover:-translate-y-1"
    >
      moono.space
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
