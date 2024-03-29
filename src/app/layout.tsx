import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import scripts from './scripts'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My MapBox App',
  description: 'Generated by create next app',
}

const bodyStyle = {
  width: '100%',
  height: '100%',
  margin: 0,
  padding: 0
}

const htmlStyle = {
  ...bodyStyle,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={htmlStyle} lang="en">
      <head>
        {/* {
          scripts.map(Comp => <Comp />)
        }
        <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css" /> */}
      </head>
      <body style={bodyStyle} className={inter.className}>{children}</body>
    </html>
  )
}
