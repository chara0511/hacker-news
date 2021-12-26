
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
  const [scrollDir, setScrollDir] = React.useState(initialDirection)

  React.useEffect(() => {
    const threshold = thresholdPixels || 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setScrollDir(scrollY > lastScrollY ? scrollDown : scrollUp)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !off
      ? window.addEventListener('scroll', onScroll)
      : setScrollDir(initialDirection)

    return () => window.removeEventListener('scroll', onScroll)
  }, [initialDirection, thresholdPixels, off])

  return scrollDir
}

export default useScrollDirection
