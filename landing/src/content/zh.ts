import type { LandingContent } from './types'

export const zhContent: LandingContent = {
  locale: 'zh-CN',
  path: '/',
  lang: 'zh-CN',
  title: 'CodexOne - 国内直连的 GPT 模型 API 服务',
  description:
    'CodexOne 提供国内直连的 GPT 系列模型 API 服务，支持 GPT-5.5、GPT-5.4、GPT-5.3 Codex、GPT-5.4 Mini、GPT-Image-2 与 GPT-5.5 Pro。透明倍率、三档速度，适合开发者与团队快速接入。',
  ogTitle: 'CodexOne - 国内直连的 GPT 模型 API 服务',
  ogDescription:
    '支持 GPT 文本、Codex、图像与深度研究模型，透明倍率，三档速度，适合开发者与团队快速接入。',
  hero: {
    eyebrow: 'CodexOne',
    heading: '国内直连的 GPT 系列模型 API 服务',
    subheading:
      '覆盖 GPT 文本、Codex、图像与深度研究模型，支持透明倍率与多档速度，适合开发者与团队快速接入真实业务场景。',
    supportingLine: '为开发者、团队与生产环境而设计。',
    primaryCta: '立即开始',
    secondaryCta: '查看模型与倍率',
    docsCta: '查看文档',
    tags: [{ label: 'GPT-only' }, { label: '国内直连' }, { label: '三档速度' }, { label: '透明倍率' }]
  },
  highlights: ['国内直连', '支持 GPT 核心模型', '图像 / Codex / 深度研究覆盖', '透明充值比例', '多档速度可选', '适合开发者与团队'],
  models: {
    title: '覆盖核心 GPT 模型',
    subtitle: '从通用文本到代码、图像与深度研究，CodexOne 提供面向真实业务需求的 GPT 模型 API 接入。',
    items: [
      {
        name: 'GPT-5.5',
        title: '高质量文本与复杂任务处理',
        description: '适合高质量内容生成、复杂问答、分析推理与通用业务场景。'
      },
      {
        name: 'GPT-5.4',
        title: '稳定通用模型',
        description: '适合日常开发、稳定调用与长期运行的业务接入。'
      },
      {
        name: 'GPT-5.3 Codex',
        title: '面向代码与开发工作流',
        description: '适用于代码生成、重构、自动化脚本与开发辅助场景。'
      },
      {
        name: 'GPT-5.4 Mini',
        title: '轻量高性价比调用',
        description: '适合高频、轻负载、对成本更敏感的请求任务。'
      },
      {
        name: 'GPT-Image-2',
        title: '图像生成能力',
        description: '适用于视觉创作、内容营销、产品素材与图像生成场景。'
      },
      {
        name: 'GPT-5.5 Pro',
        title: '深度研究与复杂分析',
        description: '适合长链路思考、复杂任务拆解与更高要求的分析输出。'
      }
    ]
  },
  pricing: {
    title: '透明计费，按需求选择速度档位',
    subtitle: '充值比例公开透明，不同档位覆盖不同成本与体验需求。',
    rechargeRate: '充值比例：1 RMB = 6 USD',
    footnote: '不同档位在响应速度、缓存收益、请求复用与整体体验上存在差异，可根据业务需求自由选择。',
    items: [
      {
        name: '低速',
        multiplier: '倍率 1',
        points: ['成本优先', '适合批量任务与非实时场景', '基础响应体验', '较低缓存收益', '适合预算敏感型调用']
      },
      {
        name: '普通',
        multiplier: '倍率 1.3',
        points: ['速度与成本平衡', '更好的响应体验', '更高缓存收益', '更高请求复用能力', '适合日常开发与常规业务请求']
      },
      {
        name: '高速',
        multiplier: '倍率 1.6',
        recommended: true,
        points: ['更快响应速度', '更高缓存收益', '更高请求复用能力', '更适合生产环境与体验敏感业务', '面向更高性能需求']
      }
    ]
  },
  features: {
    title: '为什么开发者和团队选择 CodexOne',
    subtitle: '更聚焦的模型覆盖、更清晰的倍率机制，以及更适合真实业务接入的使用体验。',
    items: [
      { title: '专注 GPT 系列', description: '围绕 GPT 模型能力与接入体验持续优化，选择更聚焦。' },
      { title: '国内直连体验', description: '更适合国内开发、测试、接入与日常调用场景。' },
      { title: '透明倍率机制', description: '充值比例与速度档位清晰可见，方便成本评估与控制。' },
      { title: '多模型场景覆盖', description: '文本、代码、图像、深度研究，一套服务覆盖多类需求。' },
      { title: '更适合实际业务接入', description: '从原型验证到正式上线，都能快速开始与持续调用。' },
      { title: '面向开发者与团队', description: '适合个人开发、自动化任务、团队工具与产品能力接入。' }
    ]
  },
  useCases: {
    title: '适用于真实业务场景',
    subtitle: '不仅能接，还要能真正用在产品、工作流和生产环境中。',
    items: [
      { title: 'AI 应用开发', description: '快速为产品接入 GPT 文本能力，用于对话、内容生成、智能问答等场景。' },
      { title: '代码生成与开发辅助', description: '利用 GPT-5.3 Codex 支持代码生成、重构、脚本编写与开发工作流优化。' },
      { title: '图像生成', description: '通过 GPT-Image-2 支持视觉创作、素材生成与内容生产。' },
      { title: '深度研究与复杂分析', description: '使用 GPT-5.5 Pro 处理需要更强推理、分析与长链路输出的任务。' },
      { title: '团队内部工具', description: '适合企业或团队内部 AI 工具、自动化平台与工作流接入。' },
      { title: '自动化任务与 API 集成', description: '可用于脚本任务、系统集成、批处理任务与高频调用场景。' }
    ]
  },
  integration: {
    title: '快速开始，直接接入',
    subtitle: '登录后即可进入控制台，通过文档快速完成模型选择、调用与业务集成。',
    bullets: ['登录后进入控制台', '查看支持模型与使用方式', '根据业务需求选择速度档位', '通过文档快速完成接入'],
    primaryCta: '立即开始',
    docsCta: '查看文档'
  },
  faq: {
    title: '常见问题',
    items: [
      { question: 'CodexOne 支持哪些模型？', answer: 'CodexOne 当前支持 GPT-5.5、GPT-5.4、GPT-5.3 Codex、GPT-5.4 Mini、GPT-Image-2 与 GPT-5.5 Pro。' },
      { question: 'CodexOne 是否只支持 GPT 系列？', answer: '是。CodexOne 当前专注于 GPT 系列模型 API 服务。' },
      { question: '充值比例如何计算？', answer: '当前充值比例为 1 RMB = 6 USD，实际调用成本会根据所选速度档位按倍率计算。' },
      { question: '低速、普通、高速有什么区别？', answer: '不同档位在响应速度、缓存收益、请求复用能力与整体体验上存在差异，适合不同的成本与性能需求。' },
      { question: '为什么高速档更适合生产环境？', answer: '高速档通常提供更好的响应体验、更高缓存收益与更高请求复用能力，更适合对性能和体验更敏感的业务场景。' },
      { question: '是否支持图像生成？', answer: '支持。CodexOne 提供 GPT-Image-2，可用于图像生成相关场景。' },
      { question: 'GPT-5.5 Pro 适合什么任务？', answer: '更适合深度研究、复杂分析、长链路推理与高质量输出任务。' },
      { question: '是否需要梯子？', answer: 'CodexOne 面向国内直连场景设计，可直接接入和使用。' },
      { question: '是否适合团队使用？', answer: '适合。CodexOne 同时面向个人开发者与团队业务接入场景设计。' },
      { question: '如何开始使用？', answer: '点击“立即开始”，登录后进入控制台即可开始使用，并可通过文档了解接入方式。' }
    ]
  },
  trust: {
    title: '为真实业务接入而构建',
    subtitle: '稳定性、使用规模与业务数据等信任信息将在后续补充。',
    placeholders: ['运行表现', '请求规模', '用户与团队验证']
  },
  bottomCta: {
    title: '开始接入 GPT 模型 API',
    subtitle: '适合开发者、团队与真实业务场景的 GPT API 服务。',
    primaryCta: '立即开始',
    docsCta: '查看文档'
  },
  navigation: {
    models: '模型',
    pricing: '价格',
    faq: 'FAQ',
    docs: '文档',
    login: '登录'
  },
  footer: {
    copyright: '© 2026 CodexOne. All rights reserved.',
    docs: '文档',
    login: '登录',
    languageSwitch: 'English'
  }
}
