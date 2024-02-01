export type TextProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  display?: string
  m?: string
  p?: string
  size?: string
  font?: string
  color?: string
  justify?: string
  align?: string
  gap?: string
  border?: string
}

export type FlexProps = React.HTMLAttributes<HTMLElement> & {
  display?: string
  m?: string
  p?: string
  size?: string
  font?: string
  color?: string
  justify?: string
  align?: string
  gap?: string
  border?: string
}

export type GridProps = React.HTMLAttributes<HTMLElement> & {
  display?: string
  col?: string
  m?: string
  p?: string
  size?: string
  font?: string
  color?: string
  justify?: string
  align?: string
  gap?: string
  border?: string
}

export type PageProps = React.HTMLAttributes<HTMLElement> & {
  m?: string
  p?: string
  size?: string
  font?: string
  color?: string
  justify?: string
  align?: string
  gap?: string
  border?: string
}

export type AvatarProps = React.HTMLAttributes<HTMLElement> & {
  src: string
  fallback: string
  alt?: string
  className?: string
  href?: string | null
  radius?: string
}
