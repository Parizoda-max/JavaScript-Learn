import { gettingStarted } from './gettingStarted'
import { coreLanguage } from './coreLanguage'
import { stringMethods } from './stringMethods'
import { arrayMethods } from './arrayMethods'
import { objectMethods } from './objectMethods'
import { numberMethods, mathMethods } from './numberMathMethods'
import { dateMethods } from './dateMethods'
import { mapSetMethods } from './mapSetMethods'
import { jsonMethods, promiseMethods, regexpMethods } from './miscMethods'
import { sections as uzSections } from './uz'

export const sections = [
  { id: 'basics', title: 'Getting Started', topics: gettingStarted.topics },
  { id: 'core', title: 'Core Language', topics: coreLanguage.topics },
  {
    id: 'reference',
    title: 'Methods Reference',
    topics: [
      stringMethods,
      arrayMethods,
      objectMethods,
      numberMethods,
      mathMethods,
      dateMethods,
      mapSetMethods,
      jsonMethods,
      promiseMethods,
      regexpMethods,
    ],
  },
]

const uzTitle = { basics: 'Boshlash', core: 'Asosiy til', reference: 'Metodlar maʼlumotnomasi' }
const uzById = new Map(uzSections.flatMap((s) => s.topics).map((t) => [t.id, t]))

export const sectionsByLang = {
  en: sections,
  uz: sections.map((s) => ({
    id: s.id,
    title: uzTitle[s.id] || s.title,
    topics: s.topics.map((t) => uzById.get(t.id) || t),
  })),
}