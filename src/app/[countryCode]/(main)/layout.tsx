import { Metadata } from 'next'

import { getBaseURL } from '@lib/util/env'
import Footer from '@modules/layout/templates/footer'
import Nav from '@modules/layout/templates/nav'

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function PageLayout(props: {
  params: { countryCode: string }
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  )
}
