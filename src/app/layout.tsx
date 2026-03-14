import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { AppLayout } from '@/components/layout/AppLayout'

export const metadata: Metadata = {
  title: 'PropEdge Intelligence',
  description: 'The Bloomberg Terminal for Sports Betting — Premium Analytics Platform',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppLayout>{children}</AppLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
