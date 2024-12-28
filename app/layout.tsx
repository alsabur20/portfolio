import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdul Sabur - Portfolio',
  description: 'Personal portfolio of Abdul Sabur, showcasing projects and experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

