export default function Sidebar({ sections, activeId, onSelect, strings, lang, onToggleLang }) {
  return (
    <nav className="sidebar">
      <div className="brand">
        <div className="brand-row">
          <h1>
            {lang === 'en' ? (
              <>
                Learn <span>JavaScript</span>
              </>
            ) : (
              <>
                <span>JavaScript</span> o'rganing
              </>
            )}
          </h1>
          <button
            type="button"
            className="lang-toggle"
            onClick={onToggleLang}
            title={lang === 'en' ? "O'zbekcha" : 'English'}
          >
            {strings.switchTo}
          </button>
        </div>
      </div>
      {sections.map((section) => (
        <div key={section.title} className="side-section">
          <h4>{section.title}</h4>
          <ul>
            {section.topics.map((topic) => (
              <li key={topic.id}>
                <button
                  type="button"
                  className={topic.id === activeId ? 'active' : ''}
                  onClick={() => onSelect(topic.id)}
                >
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}