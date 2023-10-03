import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recomendacoes Livros Cristaos',
  description: 'Essa e uma recomendacao de livros cristaos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          id="join-ads-load"
          data-post-id="11098"
          type="text/javascript"
          src="https://script.joinads.me/ads_11199.js"
          async
        />

        <script
          id="ranking-google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NX2CX44L');
        `}}
        />
      </head>

      <body className={`${inter.className} bg-gray-100`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NX2CX44L"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>

        <div className="w-full flex flex-row justify-center">

          <div className="join-ads" data-bloco="Fixed1" data-mobile="0" data-sizes="[[728, 90]]"></div>

          <div className="flex flex-row justify-center max-w-6xl p-4 gap-3">
            <div className="container max-w-3xl">
              {children}
            </div>

            <div aria-label="Sidebar" className="sidebar hidden sm:block justify-start w-80 text-center">
              <div className="join-ads" data-bloco="Sidebar1" data-mobile="0" data-sizes="[[300, 600]]"></div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html >
  )
}
