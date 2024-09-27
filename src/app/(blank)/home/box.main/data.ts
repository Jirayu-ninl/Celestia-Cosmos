export type Data = {
  title: string
  description: string
  href: string
  imgUrl?: string
  imgBgUrl?: string
  disabled?: boolean
}

type DataKey =
  | 'Showcase'
  | 'Latest Event App'
  | 'Desktop & WebApp'
  | 'Download'
  | 'Project'

export const data: Record<DataKey, Data[]> = {
  Showcase: [
    {
      title: 'Showcase 2024',
      // description: 'Unleash the Universe Within!',
      description: 'Celestia: In progress...',
      href: 'https://theiceji.com/showcase',
      imgUrl: '',
      disabled: true,
    },
    {
      title: 'Showcase 2023 (Aurora)',
      description: 'Explore the Abstract Cube',
      href: 'https://theiceji.com/showcase/2023',
      imgUrl: '',
    },
    {
      title: 'Showcase 2022 (Next)',
      description: 'Lost in the space',
      href: 'https://v3.theiceji.com',
      imgUrl: '',
    },
  ],
  'Latest Event App': [
    {
      title: 'Garnier Greeniverse',
      description: 'Greeniverse event @siam',
      href: 'https://hopintothegreeniverse.com',
      imgUrl: 'https://www.hopintothegreeniverse.com/logo.svg',
    },
    {
      title: 'Collective Bloom',
      description: 'Bangkok Design Week 2024',
      href: 'https://collectiveblooms.com',
      imgUrl: 'https://collectiveblooms.com/logo_white.svg',
    },
    {
      title: 'The Standard event',
      description: 'AP Thai booth',
      href: 'https://apthai-thestandard.com',
      imgUrl: 'https://apthai-thestandard.com/logo.svg',
    },
    {
      title: 'AIS Celebration Village',
      description: 'AIS event @siamCenter',
      href: 'https://ais-celebration-village.com',
      imgUrl: 'https://companieslogo.com/img/orig/ADVANC.BK-4294a7ab.png',
      // disable: true,
    },
  ],
  'Desktop & WebApp': [
    {
      title: 'ArtNexus Studio',
      description: 'Generative Art AI',
      href: 'https://demo-artnexus.nexellab.com',
      imgUrl: 'https://assets.theiceji.com/projects/ArtNexus_Icon_black.png',
    },
    {
      title: 'TourTune',
      description: 'Concert tour manager',
      href: 'https://tourtune.com',
      imgUrl: 'https://assets.theiceji.com/projects/TourTune_Icon_black.png',
    },
    {
      title: 'Artscape',
      description: 'Creative Community Network',
      href: 'https://artscape.day/',
      imgUrl: 'https://assets.theiceji.com/projects/ArtScape_Logo_White.svg',
    },
  ],
  Download: [
    {
      title: 'IJN Viz Collection',
      description: 'TradingView Graph Indicator',
      href: '',
    },
    {
      title: 'IJN Pnl Collection',
      description: 'TradingView Panel Indicator',
      href: '',
    },
    {
      title: 'Discord Glass',
      description: 'Discord Glass Theme',
      href: 'https://github.com/Jirayu-ninl/T6i-Discord-Glass-Theme',
    },
    {
      title: 'Dimension Ai',
      description: 'Stable Diffusion WebUI Theme',
      href: 'https://github.com/Jirayu-ninl/sd-webui-dimensions-theme',
    },
  ],
  Project: [
    {
      title: 'TheIceJi Cosmos',
      description: 'WebApp Architecture & Design',
      href: '',
      imgUrl: '/logo_white.svg',
    },
    {
      title: 'Aurora Stack',
      description: 'WebApp Starter for Full-stack',
      href: 'https://aurora.nexellab.com',
      // imgUrl: '/logo_white.svg',
    },
    {
      title: 'VitalLink',
      description: 'Health Social',
      href: 'project/vital-link',
    },
    {
      title: 'Ciao',
      description: 'Film renting',
      href: 'project/ciao',
    },
    {
      title: 'Finance Flow',
      description: 'Expense tracker',
      href: 'project/finance-flow',
    },
  ],
}
