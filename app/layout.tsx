import clsx from 'clsx'
import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  title: {
    template: '%s - Phish Directory',
    default: 'Phish Directory',
  },
  authors: [
    {
      name: 'Jasper Mayone',
      url: 'https://jaspermayone.com',
    },
  ],
  creator: 'Jasper Mayone',
  publisher: 'phish.directory',
  applicationName: 'Phish Directory',
  description:
    'Stay safe from phishing attacks. Phish Directory is a community-driven database of phishing URLs.',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png?v=2',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png?v=2',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png?v=2',
      },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        url: '/apple-touch-icon-57x57.png?v=2',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        url: '/apple-touch-icon-60x60.png?v=2',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        url: '/apple-touch-icon-72x72.png?v=2',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        url: '/apple-touch-icon-76x76.png?v=2',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        url: '/apple-touch-icon-114x114.png?v=2',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        url: '/apple-touch-icon-120x120.png?v=2',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        url: '/apple-touch-icon-144x144.png?v=2',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        url: '/apple-touch-icon-152x152.png?v=2',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon-180x180.png?v=2',
      },
    ],
  },
  openGraph: {
    title: 'Phish Directory',
    description:
      'Stay safe from phishing attacks. Phish Directory is a community-driven database of phishing URLs.',
    url: 'https://phish.directory',
    siteName: 'Phish Directory',
  },
  manifest: '/site.webmanifest?v=2',
  keywords: [
    'phishing',
    'phishing URLs',
    'phishing database',
    'phishing directory',
    'phishing protection',
    'phishing attacks',
    'phishing prevention',
    'phishing detection',
    'phishing threats',
    'phishing scams',
    'phishing awareness',
    'phishing safety',
    'phishing education',
    'phishing resources',
    'phishing community',
    'phishing reporting',
    'phishing analysis',
    'phishing intelligence',
    'phishing research',
    'phishing trends',
    'phishing statistics',
    'phishing news',
    'phishing updates',
    'phishing alerts',
  ],
  robots: {
    index: true,
    follow: true,
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <Script
        defer={true}
        src="https://umami.hogwarts.dev/script.js"
        data-website-id="edb8204a-3c17-4b8e-93c2-cf991c41bd52"
      />
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
