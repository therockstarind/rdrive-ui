import FolderGridLayout from '®/components/FolderGridLayout'
import Discover from '®/components/card/discover'
import Hero from '®/components/hero'
import { Page } from '®rdrive/ui'
export default function Home() {
  return (
    <>
      <Page>
        <Hero />
        <FolderGridLayout />
      </Page>
    </>
  )
}
