export type ContentNavigationItem = {
  name: string
  url: string
}

export type ContentNavigation = ContentNavigationItem[]
export const ContentNavigation: ContentNavigation = [
  {
    name: 'Discover',
    url: '/learning-content',
  },
  {
    name: 'Get Involved',
    url: '/contributors',
  },
  {
    name: 'Support Us',
    url: '/support-us',
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
