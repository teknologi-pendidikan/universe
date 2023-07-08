export type ContentNavigationItem = {
  name: string
  url: string
}

export type ContentNavigation = ContentNavigationItem[]
export const ContentNavigation: ContentNavigation = [
  {
    name: 'Discover',
    url: '/discover',
  },
  {
    name: 'Share',
    url: '/share',
  },
  {
    name: 'Get Involved',
    url: '/contributors',
  },
  {
    name: 'Support',
    url: '/support',
  },
]

export const GlobalNavigation: ContentNavigation = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Policy',
    url: '/policy',
  },
  {
    name: 'Guidelines',
    url: '/guidelines',
  },
  {
    name: 'About',
    url: '/about',
  },
]
