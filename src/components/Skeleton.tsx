'use client'
import { Grid } from '@radix-ui/themes'
import Skeleton from '®ui/skeleton'

const randomWidth = () => {
  const widths = ['3/4', '4/5', 'full']
  return `w-${widths[Math.floor(Math.random() * widths.length)]}`
}

const randomCount = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const MarkdownSkeleton = () => {
  return (
    <Grid gap="4" pt="4" aria-busy="true">
      {/* Simulate a large H1 Title */}
      <Skeleton className="h-12 w-full rounded-md" />

      {/* Simulate Paragraphs */}
      {[...Array(randomCount(2, 4))].map((_, index) => (
        <Skeleton
          key={`para-${index}`}
          className={`${randomWidth()} h-4 rounded-md`}
        />
      ))}

      {/* Simulate a smaller H2 Header */}
      <Skeleton className="h-10 rounded-md" />

      {/* Simulate an Image */}
      <Skeleton className="h-48 w-full rounded-md" />

      {/* Simulate a Table */}
      {[...Array(randomCount(2, 3))].map((_, index) => (
        <Skeleton
          key={`table-${index}`}
          className={`${randomWidth()} h-6 rounded-md`}
        />
      ))}
    </Grid>
  )
}
