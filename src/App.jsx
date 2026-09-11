import { useEffect, useState } from 'react'
import './App.css'
import { sectionsByLang } from './data/index'
import { ui } from './i18n'
import Sidebar from './components/Sidebar'
import TopicView from './components/TopicView'

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const strings = ui[lang]
  const sections = sectionsByLang[lang]
  const allTopics = sections.flatMap((t) => t.topics)
  const [activeId, setActiveId] = useState(allTopics[0].id)
  const currentIndex = allTopics.findIndex((t) => t.id === activeId)
  const current = allTopics[currentIndex]
  const prev = currentIndex > 0 ? allTopics[currentIndex - 1] : null
  const next = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null

  useEffect(() => {
    document.title = `${current.title} — ${strings.documentTitleSuffix}`
  }, [current, strings])

  function navigateTo(id) {
    setActiveId(id)
    window.scrollTo({ top: 0 })
  }

  function toggleLang() {
    const next = lang === 'en' ? 'uz' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return (
    <div className="layout">
      <Sidebar
        sections={sections}
        activeId={activeId}
        onSelect={navigateTo}
        strings={strings}
        lang={lang}
        onToggleLang={toggleLang}
      />
      <main className="content">
        <TopicView key={current.id} topic={current} strings={strings} lang={lang} />
        <nav className="page-nav">
          {prev ? (
            <button type="button" onClick={() => navigateTo(prev.id)}>
              ← {prev.title}
            </button>
          ) : (
            <span />
          )}
          <span className="spacer" />
          {next ? (
            <button type="button" className="next" onClick={() => navigateTo(next.id)}>
              {next.title} →
            </button>
          ) : null}
        </nav>
      </main>
    </div>
  )
}

export default App