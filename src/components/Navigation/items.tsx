import Link from 'next/link'
import { menuItems } from './menu'

interface PropsItems {
  classUl: string
  classLi: string
  children?: React.ReactNode
  limit?: number
  setShowMenu?: (showMenu: boolean) => void
}

export const Items = ({
  classLi,
  classUl,
  children,
  limit,
  setShowMenu,
}: PropsItems) => {
  const itemsToShow = limit ? menuItems.slice(0, limit) : menuItems

  return (
    <ul className={classUl}>
      {children}
      {itemsToShow.map(({ label, href }: { label: string; href: string }) => (
        <Link
          className='w-full'
          href={href}
          key={label}
          onClick={() => setShowMenu && setShowMenu(false)}
        >
          <li className={classLi}>{label}</li>
        </Link>
      ))}
    </ul>
  )
}
