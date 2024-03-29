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
export type AuthorType = {
  name?: string
  avatar?: string
  desc?: string
  follower?: number
  following?: number
}
export type DiscoverType = {
  id?: string
  title?: string
  desc?: string
  image: string
  keywords?: Array<string>
  tags?: Array<string>
  author?: AuthorType
  createTime?: Date
  updateTime?: Date
  // contentType: 'mobile' |  'windows' | 'post'
  likes: number
  dislikes: number
  views: number
  commentsNum: number
  // status: 'draft' | 'publish' | 'trash'
  // follow?: boolean
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
  badge?: string[]
  [key: string]: any
}
