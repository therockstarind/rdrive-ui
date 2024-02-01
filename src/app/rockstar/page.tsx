import User from '®/components/user/user'
import { Demo } from '®/config/demo'
import { Page } from '®rdrive/ui'

export default function Home() {
  return (
    <Page className="p-0 sm:p-2 sm:my-2">
      <User user={Demo.user} post={Demo.post} />
    </Page>
  )
}
