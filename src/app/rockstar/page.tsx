import User from '®/components/user/user'
import { Demo } from '®/config/demo'
import { Page } from '®rdrive/ui'

export default function Home() {
  return (
    <Page>
      <User user={Demo.user} post={Demo.post} />
    </Page>
  )
}
