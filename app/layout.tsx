import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bat Education and Rehabilitation of Grainger County',
  description:
    'Supporting local bat populations through rehabilitation and public education in Grainger County.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
