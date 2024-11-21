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
      href: '/showcase/2024',
      imgUrl: '',
      disabled: true,
    },
    {
      title: 'Showcase 2023 (Aurora)',
      description: 'Explore the Abstract Cube',
      href: '/showcase/2023',
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
      title: 'Rangnam LKT 2024',
      description: 'Digital Loy Krathong @Santipap',
      href: 'https://rangnamloykrathongdigital.27june.studio/',
      imgUrl: 'https://rangnamloykrathongdigital.27june.studio/icon.png',
    },
    {
      title: 'Skywalk LKT 2024',
      description: 'Digital Loy Krathong @Skywalk Siam',
      href: 'https://loykrathongskywalk.27june.studio/',
      imgUrl: 'https://loykrathongskywalk.27june.studio/logo.png',
    },
    {
      title: 'Find Your Stylecation by DNA',
      description: 'DNA x TAT Event 2024',
      href: 'https://www.your-travel-dna.com/',
      imgUrl: 'https://checkin.your-travel-dna.com/logo_white.svg',
    },
    {
      title: 'Your Travel DNA Check-in',
      description: 'DNA x TAT Event 2024',
      href: 'https://checkin.your-travel-dna.com/',
      imgUrl: 'https://checkin.your-travel-dna.com/logo_white.svg',
    },
    {
      title: 'Garnier Greeniverse',
      description: 'Greeniverse event @siam',
      href: 'https://hopintothegreeniverse.com/',
      imgUrl: 'https://www.hopintothegreeniverse.com/logo.svg',
    },
    {
      title: 'Collective Bloom',
      description: 'Bangkok Design Week 2024',
      href: 'https://collectiveblooms.com/',
      imgUrl: 'https://collectiveblooms.com/logo_white.svg',
    },
    {
      title: 'The Standard event',
      description: 'AP Thai booth',
      href: 'https://ap-standard.nexellab.com/',
      imgUrl: 'https://ap-standard.nexellab.com/logo.svg',
    },
    {
      title: 'AIS Celebration Village',
      description: 'AIS event @siamCenter',
      href: 'https://ais-celebration.nexellab.com/',
      imgUrl: 'https://companieslogo.com/img/orig/ADVANC.BK-4294a7ab.png',
      // disable: true,
    },
  ],
  'Desktop & WebApp': [
    {
      title: 'ArtNexus Studio',
      description: 'Generative Art AI',
      href: 'https://artnexus.outpost.nexellab.com',
      imgUrl: 'https://orion.theiceji.com/ArtNexus_icon_blackBg.png',
    },
    {
      title: 'TourTune',
      description: 'Concert tour manager',
      href: 'https://tourtune.com',
      imgUrl: 'https://orion.theiceji.com/TourTune_icon_blackBg.png',
    },
    {
      title: 'Artscape',
      description: 'Creative Community Network',
      href: 'https://artscape.day/',
      imgUrl: 'https://orion.theiceji.com/ArtScape_icon_blackBg.png',
    },
  ],
  Download: [
    {
      title: 'IJN Collection v1',
      description: 'TradingView Graph Indicator',
      href: 'https://github.com/Jirayu-ninl/IJN-Indy',
    },
    {
      title: 'ProFantasy',
      description: 'Stable Diffusion Model',
      href: 'https://civitai.com/models/52298/profantasy',
      imgUrl: 'https://shop.civitai.com/cdn/shop/files/kiss-cut-stickers-white-5.5x5.5-default-64c8091bc23fa_1080x.png',
    },
    {
      title: 'ProPortrait',
      description: 'Stable Diffusion Model',
      href: 'https://civitai.com/models/72093/proportrait',
      imgUrl: 'https://shop.civitai.com/cdn/shop/files/kiss-cut-stickers-white-5.5x5.5-default-64c8091bc23fa_1080x.png',
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
      imgUrl: 'https://orion.theiceji.com/TheIceJi_icon_blackBg.png',
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
      href: '/project/vital-link',
    },
    {
      title: 'Ciao',
      description: 'Film renting',
      href: '/project/ciao',
    },
    {
      title: 'Finance Flow',
      description: 'Expense tracker',
      href: '/project/finance-flow',
    },
  ],
}
