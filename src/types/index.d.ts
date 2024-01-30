export type FeedsType = {
  id?: string;
  title: string;
  img: string;
  date: string;
  time: string;
  likes: number;
  views: number;
  href: string;
};


export type UserType = {
  img: string;
  name?: string;
  description?: string;
};

export type UserDetailsType = {
  coverimg?: string;
  img: string;
  name?: string;
  username?: string;
  post?: number;
  followers?: number;
  following?: number;
  [key: string]: any;
};
export type AuthorType = {
  author?: UserType;
  authordetails?: UserDetailsType;
};
