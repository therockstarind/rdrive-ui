export type FeedsType = {
  id?: string
  title: string
  img: string
  date: string
  time: string
  likes: number
  views: number
  href: string
}

export type UserDetailsType = {
  coverimg?: string
  img: string
  name?: string
  username?: string
  post?: number
  followers?: number
  following?: number
  [key: string]: any
}
export type AuthorType = {
  author?: UserType
  authordetails?: UserDetailsType
}

export type UserType = {
  name?: string
  description?: string
  bio?: string
  social?: Array<{ link: string; icon: string }>
  username?: string
  password?: string
  avatar?: string
  coverimg?: string
  post?: number
  followers?: number
  following?: number
  [key: string]: any
}
