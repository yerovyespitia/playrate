import Link from 'next/link'
import { menuItems } from './menu'

interface PropsItems {
  classUl: string
  classLi: string
  children?: React.ReactNode
  limit?: number
}

export const Items = ({ classLi, classUl, children, limit }: PropsItems) => {
  const itemsToShow = limit ? menuItems.slice(0, limit) : menuItems

  return (
    <ul className={classUl}>
      {children}
      {itemsToShow.map(({ label, href }: { label: string; href: string }) => (
        <Link className='w-full' href={href} key={label}>
          <li className={classLi}>{label}</li>
        </Link>
      ))}
    </ul>
  )
}
