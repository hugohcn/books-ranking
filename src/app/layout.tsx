import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import books from '../data/books'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Top 5 Livros Cristãos - Recomendações Especiais para Enriquecer sua Fé',
  description: 'Explore nossa seleção dos melhores livros cristãos gratuitos, ideais para jovens e disponíveis em PDF. Nutra sua espiritualidade agora!',
  keywords: ['livro cristão', 'livros cristãos gratuitos', 'livro cristão para jovens', 'livros cristãos em pdf gratis'],
}

const addProductJsonLd = () => {
  return {
    __html: ` {
        "@context": "http://schema.org",
        "@type": "ItemList",
        "numberOfItems": ${books.length},
        "itemListElement": [
          ${books.map((book, index) => `
            {
              "@type": "ListItem",
              "position": ${index + 1},
              "name": "${book.name}",
              "image": "${book.thumbnail}",
              "url": "${book.url}"
            }
          `).join(',')}
        ]
      }
    `
  }
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
          src="https://script.joinads.me/ads_14086.js"
          defer
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />

        <script
          id="ranking-google-tag-manager"
          async
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

        <div className="w-full ml-auto mr-auto">

          <div className="flex justify-center my-4">
            <div className="join-ads" data-bloco="Fixed1" data-mobile="0" data-sizes="[[728, 90]]"></div>
          </div>

          <div className="flex flex-row justify-center max-w-6xl ml-auto mr-auto p-4 gap-3">
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
