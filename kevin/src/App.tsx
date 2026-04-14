import { useEffect, useMemo, useState } from 'react'
import './App.css'
import {
  defaultPath,
  findMenuByPath,
  topMenuItems,
  type SideMenuItem,
} from './constants/common'

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (!findMenuByPath(pathname)) {
      window.history.replaceState({}, '', defaultPath)
      setPathname(defaultPath)
    }
  }, [pathname])

  useEffect(() => {
    setIsMobileNavOpen(false)
  }, [pathname])

  const activeMenu = useMemo(() => findMenuByPath(pathname), [pathname])

  const handleNavigate = (nextPath: string) => {
    if (nextPath === pathname) return

    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
  }

  if (!activeMenu) {
    return null
  }

  const ActivePage = activeMenu.activeItem.component

  return (
    <div className="app-shell">
      <header className="gnb">
        <div className="gnb__brand">
          <button
            type="button"
            className="gnb__menu-button"
            onClick={() => setIsMobileNavOpen((current) => !current)}
            aria-label="Toggle side navigation"
            aria-expanded={isMobileNavOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <div>
            <p className="gnb__eyebrow">great-frontend</p>
            <strong className="gnb__title">Problem Workspace</strong>
          </div>
        </div>

        <nav className="gnb__nav" aria-label="Global navigation">
          {topMenuItems.map((menu) => {
            const isActive = activeMenu.topMenu.label === menu.label

            return (
              <a
                key={menu.label}
                href={menu.defaultPath}
                className={`gnb__link${isActive ? ' is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  handleNavigate(menu.defaultPath)
                }}
              >
                {menu.label}
              </a>
            )
          })}
        </nav>
      </header>

      <div className="layout">
        <aside className={`snb${isMobileNavOpen ? ' is-open' : ''}`}>
          <div className="snb__section">
            <p className="snb__label">{activeMenu.topMenu.label}</p>

            <div className="snb__menu">
              {activeMenu.topMenu.children.map((item: SideMenuItem) => {
                const isActive = pathname === item.path

                return (
                  <a
                    key={item.path}
                    href={item.path}
                    className={`snb__item${isActive ? ' is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(event) => {
                      event.preventDefault()
                      handleNavigate(item.path)
                    }}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        </aside>

        <main className="content">
          <ActivePage />
        </main>
      </div>

      {isMobileNavOpen ? (
        <button
          type="button"
          className="mobile-backdrop"
          aria-label="Close side navigation"
          onClick={() => setIsMobileNavOpen(false)}
        />
      ) : null}
    </div>
  )
}

export default App