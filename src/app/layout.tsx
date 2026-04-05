import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Jishnu's Portfolio",
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}