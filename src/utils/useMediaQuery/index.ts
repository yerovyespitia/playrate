import { useEffect } from 'react'

export const useMediaQuery = (setShowMenu: (showMenu: boolean) => void) => {
  return useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    function handleWindowChange(e: MediaQueryListEvent) {
      if (e.matches) {
        setShowMenu(false)
      }
    }

    mediaQuery.addEventListener('change', handleWindowChange)

    return () => {
      mediaQuery.removeEventListener('change', handleWindowChange)
    }
  }, [setShowMenu])
}
