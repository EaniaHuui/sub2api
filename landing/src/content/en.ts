import type { LandingContent } from './types'

export const enContent: LandingContent = {
  locale: 'en',
  path: '/en',
  lang: 'en',
  title: 'CodexOne - High-speed Global Access to GPT Model APIs',
  description:
    'CodexOne provides high-speed global access to GPT model APIs with transparent pricing and 3 speed tiers. Support GPT-5.5, GPT-5.4, GPT-5.3 Codex, GPT-5.4 Mini, GPT-Image-2, and GPT-5.5 Pro for developers and teams.',
  ogTitle: 'CodexOne - High-speed Global Access to GPT Model APIs',
  ogDescription:
    'Access GPT text, Codex, image, and deep research models with transparent pricing and flexible speed tiers for developers and teams.',
  hero: {
    eyebrow: 'CodexOne',
    heading: 'High-speed global access to GPT model APIs',
    subheading:
      'Access GPT text, Codex, image, and deep research models with transparent pricing, multiple speed tiers, and production-ready API connectivity.',
    supportingLine: 'Built for developers, teams, and production workloads.',
    primaryCta: 'Get Started',
    secondaryCta: 'View Models & Pricing',
    docsCta: 'Read Docs',
    tags: [{ label: 'GPT-only' }, { label: 'Global high-speed access' }, { label: '3 speed tiers' }, { label: 'Transparent pricing' }]
  },
  highlights: ['GPT-only', 'High-speed global access', 'Coding, image, and research support', 'Transparent recharge rate', 'Flexible speed tiers', 'Built for developers and teams'],
  models: {
    title: 'Built around core GPT models',
    subtitle: 'From text generation and coding to image creation and deep research, CodexOne gives developers and teams access to the GPT models they actually use.',
    items: [
      { name: 'GPT-5.5', title: 'Advanced text and complex task handling', description: 'Ideal for high-quality generation, advanced reasoning, and general-purpose workloads.' },
      { name: 'GPT-5.4', title: 'Stable general-purpose access', description: 'Suitable for everyday development, stable workloads, and long-running business use.' },
      { name: 'GPT-5.3 Codex', title: 'Built for coding workflows', description: 'Great for code generation, refactoring, scripting, and developer tooling.' },
      { name: 'GPT-5.4 Mini', title: 'Lightweight and cost-efficient', description: 'Best for higher-frequency requests and cost-sensitive workloads.' },
      { name: 'GPT-Image-2', title: 'Image generation capability', description: 'Suitable for creative production, visual workflows, and marketing assets.' },
      { name: 'GPT-5.5 Pro', title: 'Deep research and advanced analysis', description: 'Designed for long-chain reasoning, research-heavy tasks, and complex outputs.' }
    ]
  },
  pricing: {
    title: 'Transparent pricing with flexible speed tiers',
    subtitle: 'Choose the right balance of cost, responsiveness, cache efficiency, and request reuse for your workload.',
    rechargeRate: 'Recharge rate: 1 RMB = 6 USD',
    footnote: 'Each tier offers a different balance of response speed, cache efficiency, request reuse, and overall experience.',
    items: [
      {
        name: 'Low Speed',
        multiplier: 'Multiplier 1',
        points: ['Cost-first option', 'Good for batch and non-real-time workloads', 'Basic response experience', 'Lower cache efficiency', 'Best for budget-sensitive use']
      },
      {
        name: 'Standard',
        multiplier: 'Multiplier 1.3',
        points: ['Balanced cost and speed', 'Better responsiveness', 'Higher cache efficiency', 'Better request reuse', 'Ideal for day-to-day development and business use']
      },
      {
        name: 'High Speed',
        multiplier: 'Multiplier 1.6',
        recommended: true,
        points: ['Faster response times', 'Higher cache efficiency', 'Better request reuse', 'Better for production workloads', 'Designed for performance-sensitive use cases']
      }
    ]
  },
  features: {
    title: 'Why developers and teams choose CodexOne',
    subtitle: 'A more focused model lineup, clearer pricing logic, and a better fit for real-world API workloads.',
    items: [
      { title: 'GPT-focused model access', description: 'Built around GPT model use cases instead of broad, generic model coverage.' },
      { title: 'High-speed global connectivity', description: 'Designed for faster access and smoother API usage across real workloads.' },
      { title: 'Transparent pricing logic', description: 'Recharge rate and speed tiers are clearly defined for easier cost planning.' },
      { title: 'Coverage for multiple workload types', description: 'Text, coding, image generation, and deep research in one service.' },
      { title: 'Better fit for real business integration', description: 'From prototypes to production, CodexOne helps you start fast and scale usage.' },
      { title: 'Built for developers and teams', description: 'Suitable for solo builders, automation workflows, internal tools, and product teams.' }
    ]
  },
  useCases: {
    title: 'Built for real-world workloads',
    subtitle: 'From shipping AI features to integrating internal workflows, CodexOne is designed for practical use.',
    items: [
      { title: 'AI application development', description: 'Integrate GPT-powered experiences for chat, generation, search, and user-facing workflows.' },
      { title: 'Coding and developer workflows', description: 'Use GPT-5.3 Codex for code generation, refactoring, automation, and development tooling.' },
      { title: 'Image generation', description: 'Create visual content and production-ready creative assets with GPT-Image-2.' },
      { title: 'Deep research and advanced analysis', description: 'Use GPT-5.5 Pro for longer reasoning chains, advanced analysis, and research-heavy tasks.' },
      { title: 'Internal team tools', description: 'Power internal copilots, automation systems, and AI-enhanced operational workflows.' },
      { title: 'Automation and API integrations', description: 'Fit high-frequency scripts, backend jobs, and production API integrations.' }
    ]
  },
  integration: {
    title: 'Start fast and integrate with confidence',
    subtitle: 'Sign in, access the dashboard, choose the right model and speed tier, and integrate CodexOne into your workflows through the documentation.',
    bullets: ['Sign in and access the dashboard', 'Review supported models and usage flows', 'Choose the right speed tier for your workload', 'Use the docs to integrate with confidence'],
    primaryCta: 'Get Started',
    docsCta: 'Read Docs'
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      { question: 'Which models does CodexOne support?', answer: 'CodexOne currently supports GPT-5.5, GPT-5.4, GPT-5.3 Codex, GPT-5.4 Mini, GPT-Image-2, and GPT-5.5 Pro.' },
      { question: 'Is CodexOne GPT-only?', answer: 'Yes. CodexOne is focused on GPT model API access.' },
      { question: 'How does pricing work?', answer: 'The current recharge rate is 1 RMB = 6 USD, and actual usage cost depends on the selected speed tier multiplier.' },
      { question: 'What is the difference between Low Speed, Standard, and High Speed?', answer: 'The tiers differ in response speed, cache efficiency, request reuse, and overall experience, making them suitable for different cost and performance needs.' },
      { question: 'Why is High Speed better for production workloads?', answer: 'High Speed is designed for faster response, better cache efficiency, and stronger request reuse, making it a better fit for performance-sensitive production use.' },
      { question: 'Do you support image generation?', answer: 'Yes. CodexOne supports GPT-Image-2 for image generation use cases.' },
      { question: 'What is GPT-5.5 Pro best for?', answer: 'It is best suited for deep research, complex reasoning, and advanced analytical tasks.' },
      { question: 'Is CodexOne suitable for teams?', answer: 'Yes. CodexOne is built for both individual developers and team-based integration scenarios.' },
      { question: 'How do I get started?', answer: 'Click “Get Started,” sign in, and access the dashboard. You can then use the documentation to integrate the service into your workflows.' }
    ]
  },
  trust: {
    title: 'Built for real API workloads',
    subtitle: 'Trust signals such as usage scale, performance metrics, and customer validation can be added later.',
    placeholders: ['Performance metrics', 'Usage scale', 'Customer validation']
  },
  bottomCta: {
    title: 'Start using GPT model APIs with CodexOne',
    subtitle: 'Built for developers, teams, and real production workloads.',
    primaryCta: 'Get Started',
    docsCta: 'Read Docs'
  },
  navigation: {
    models: 'Models',
    pricing: 'Pricing',
    faq: 'FAQ',
    docs: 'Docs',
    login: 'Sign In'
  },
  footer: {
    copyright: '© 2026 CodexOne. All rights reserved.',
    docs: 'Docs',
    login: 'Sign In',
    languageSwitch: '中文'
  }
}
