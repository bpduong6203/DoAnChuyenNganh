// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: 'Demo: Materio - NextJS Dashboard Free',
  description:
    'Develop next-level web apps with Materio Dashboard Free - NextJS. Now, updated with lightning-fast routing powered by MUI and App router.'
}

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <ClerkProvider>
      <html id='__next' dir={direction}>
        <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
