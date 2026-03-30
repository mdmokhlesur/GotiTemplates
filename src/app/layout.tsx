import type { Metadata } from 'next'
import './globals.css'
import { AppLayout } from '@/components/layout/AppLayout'
import { ReduxProvider } from '@/redux/provider'

export const metadata: Metadata = {
  title: 'PropEdge Intelligence',
  description: 'The Bloomberg Terminal for Sports Betting — Premium Analytics Platform',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ReduxProvider>
          <AppLayout>{children}</AppLayout>
        </ReduxProvider>
      </body>
    </html>
  )
}
