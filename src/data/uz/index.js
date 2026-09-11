import { gettingStarted } from './gettingStarted'
import { coreLanguage } from './coreLanguage'
import { stringMethods } from './stringMethods'
import { arrayMethods } from './arrayMethods'

export const sections = [
  gettingStarted,
  coreLanguage,
  {
    title: 'Metodlar maʼlumotnomasi',
    topics: [stringMethods, arrayMethods],
  },
]
export const translatedTopicIds = new Set([
  'introduction',
  'running-code',
  'linking-javascript',
  'variables',
  'data-types',
  'operators',
  'control-flow',
  'loops',
  'functions',
  'arrays',
  'objects',
  'strings',
  'numbers',
  'string-methods',
  'array-methods',
])