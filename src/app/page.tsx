import BookItem from './components/book-item'
import books from '../data/books'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-3 justify-start">
        <h2 className="text-slate-800 font-bold text-xl">Descubra os 5 Livros Cristãos Transformadores que Você Precisa Conhecer Hoje!</h2>
        <p>Receba Inspiração e Sabedoria com os Melhores Livros Cristãos. Leitura Essencial para Todos.</p>

        {books.map((book, index) => (
          <div key={index}>
            {index === 0 &&
              <div key={`ad-unit-top-container-${index}`} className="flex justify-center my-4">
                <div key={`ad-unit-top-${index}`} className="join-ads" data-bloco="Fixed2" data-mobile="0" data-sizes="[[320, 50]]"></div>
              </div>
            }

            <BookItem key={`book-${index}`} book={book} />

            <div key={`ad-unit-content-container-${index}`} className="flex justify-center my-4">
              <div key={`ad-unit-mobile-${index}`} className="join-ads" data-sizes="[[300, 250], [336,280]]" data-bloco={`Content${index}`} data-mobile="1"></div>
              <div key={`ad-unit-desk-${index}`} className="join-ads" data-sizes="[[300, 250], [336,280]]" data-bloco={`Content${index}`} data-mobile="0"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
