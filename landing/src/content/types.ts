export type Locale = 'zh-CN' | 'en'

export interface HeroTag {
  label: string
}

export interface ModelCard {
  name: string
  title: string
  description: string
}

export interface TierCard {
  name: string
  multiplier: string
  points: string[]
  recommended?: boolean
}

export interface FeatureCard {
  title: string
  description: string
}

export interface UseCaseCard {
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface LandingContent {
  locale: Locale
  path: '/' | '/en'
  lang: 'zh-CN' | 'en'
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  hero: {
    eyebrow: string
    heading: string
    subheading: string
    supportingLine: string
    primaryCta: string
    secondaryCta: string
    docsCta: string
    tags: HeroTag[]
  }
  highlights: string[]
  models: {
    title: string
    subtitle: string
    items: ModelCard[]
  }
  pricing: {
    title: string
    subtitle: string
    rechargeRate: string
    footnote: string
    items: TierCard[]
  }
  features: {
    title: string
    subtitle: string
    items: FeatureCard[]
  }
  useCases: {
    title: string
    subtitle: string
    items: UseCaseCard[]
  }
  integration: {
    title: string
    subtitle: string
    bullets: string[]
    primaryCta: string
    docsCta: string
  }
  faq: {
    title: string
    items: FAQItem[]
  }
  trust: {
    title: string
    subtitle: string
    placeholders: string[]
  }
  bottomCta: {
    title: string
    subtitle: string
    primaryCta: string
    docsCta: string
  }
  navigation: {
    models: string
    pricing: string
    faq: string
    docs: string
    login: string
  }
  footer: {
    copyright: string
    docs: string
    login: string
    languageSwitch: string
  }
}
