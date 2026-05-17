import { enContent } from './en'
import { zhContent } from './zh'

export const landingContent = {
  zh: zhContent,
  en: enContent
}

export type LandingContentKey = keyof typeof landingContent
