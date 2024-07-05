import Link from 'next/link'
import { menuItems } from './menu'

interface PropsItems {
  classUl: string
  classLi: string
  children?: React.ReactNode
}

export const Items = ({ classLi, classUl, children }: PropsItems) => {
  return (
    <ul className={classUl}>
      {children}
      {menuItems.map(({ label, href }: { label: string; href: string }) => (
        <Link className='w-full' href={href} key={label}>
          <li className={classLi}>{label}</li>
        </Link>
      ))}
    </ul>
  )
}
