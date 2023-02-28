import type { AstroGlobal } from 'astro'
import { SIDEBAR, Sidebar } from '../config'
interface NavLink {
  text: string
  link: string
}

interface PreviousAndNext {
  previous?: NavLink
  next?: NavLink
}

const defaultLang = 'en'

export function getNavLinks(sidebar: Sidebar = SIDEBAR): NavLink[] {
  const sections = Object.keys(sidebar[defaultLang])
  let navLinks: NavLink[] = []
  sections.forEach((section) => navLinks.push(...sidebar.en[section]))
  return navLinks
}

export function getPreviousAndNextLinks(
  navLinks: NavLink[],
  Astro: Readonly<AstroGlobal>
): PreviousAndNext {
  const index = navLinks.findIndex((nav) =>
    Astro.url.pathname.replace(/\/$/, '').endsWith(nav.link)
  )
  return {
    previous: index > 0 ? navLinks[index - 1] : undefined,
    next:
      index !== -1 && index < navLinks.length - 1
        ? navLinks[index + 1]
        : undefined,
  }
}
