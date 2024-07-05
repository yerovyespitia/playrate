import { useEffect } from 'react'

export const useShowMenu = (showMenu: boolean) => {
  return useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = 'hidden'
      document.body.style.height = '100vh'
    } else {
      document.body.style.overflowY = 'unset'
      document.body.style.height = 'auto'
    }
  }, [showMenu])
}
