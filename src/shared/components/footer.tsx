import { mergeClass } from "@shared/libs"
import { Link } from "react-router"

const footerMenus = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of use", href: "/terms" },
]

interface MenuItemProps {
  href: string
  children?: React.ReactNode
  className?: string
}

function MenuItem({
  href,
  children,
  className,
}: MenuItemProps): React.ReactElement<any> {
  return (
    <li
      className={`${mergeClass(
        "flex items-center justify-center text-sm px-3 py-2 rounded-xl bg-transparent transition-all hover:-translate-x-1 hover:text-foreground/60 duration-200",
        className,
      )}`}
    >
      <Link to={href} className="w-full h-full">
        {children}
      </Link>
    </li>
  )
}

function FooterMenuList() {
  return (
    <div className="flex">
      <ul className="flex items-center gap-2">
        {footerMenus.map((item, index) => (
          <MenuItem key={index} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="flex flex-col text-sm" id="footer">
      <div className="flex flex-col tablet:flex-row tablet:items-center py-7 tablet:justify-between mt-8">
        <span className="text-sm">
          Copyright &copy; 2024 - Alright Reserved
        </span>

        <FooterMenuList />
      </div>
    </footer>
  )
}
