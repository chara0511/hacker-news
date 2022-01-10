import * as React from 'react'
import { scrollDown, scrollUp } from '../utils/constants'
import type { Direction } from '../types'

interface Params {
  initialDirection?: Direction;
  thresholdPixels?: number;
  off?: boolean;
}

const useScrollDirection = ({
  initialDirection,
  thresholdPixels,
  off
}: Params) => {
  const [scrollDirection, setScrollDirection] =
    React.useState(initialDirection)
  const [scrolledToTop, setScrolledToTop] = React.useState(true)

  React.useEffect(() => {
    const threshold = thresholdPixels || 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setScrollDirection(scrollY > lastScrollY ? scrollDown : scrollUp)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !off
      ? window.addEventListener('scroll', onScroll)
      : setScrollDirection(initialDirection)

    return () => window.removeEventListener('scroll', onScroll)
  }, [initialDirection, thresholdPixels, off])

  const handleScroll = React.useCallback(() => {
    setScrolledToTop(window.pageYOffset < 50)
  }, [])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { scrollDirection, scrolledToTop }
}

export default useScrollDirection
