'use client'
import { useEffect } from 'react'

const useSmoothScrolling = (selector: string, dependency: any): void => {
  useEffect(() => {
    const handleAnchorLinkClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest('a[href^="#"]')
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return

      event.preventDefault()
      const targetId = anchor.getAttribute('href')
      if (targetId) {
        const targetElement = document.querySelector(targetId)
        if (targetElement && targetElement instanceof HTMLElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.addEventListener(
          'click',
          handleAnchorLinkClick as EventListener
        )
      }
    })

    const anchorFromUrl = window.location.hash
    if (anchorFromUrl) {
      const targetElement = document.querySelector(anchorFromUrl)
      if (targetElement) {
        setTimeout(
          () => targetElement.scrollIntoView({ behavior: 'smooth' }),
          100
        )
      }
    }

    return () => {
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          element.removeEventListener(
            'click',
            handleAnchorLinkClick as EventListener
          )
        }
      })
    }
  }, [selector, dependency])
}

export default useSmoothScrolling
