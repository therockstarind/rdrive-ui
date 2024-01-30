export type FeedsProps = {
  id?: string;
  title: string;
  img: string;
  date: string;
  time: string;
  likes: number;
  views: number;
  href: string;
  author: {
    name: string;
    url: string;
    img: string;
  };
};
