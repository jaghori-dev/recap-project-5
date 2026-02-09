
export default function Header () {
  return (
    <header className="header-styles">
      <h1>Art Gallery</h1>
      <nav className="nav-styles">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#spotlight" className="nav-link">
              Spotlight
              <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-link">
              Gallery
              <svg className="arrow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
