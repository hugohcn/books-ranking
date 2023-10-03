import Image from 'next/image'
import BookItem from './components/book-item'
import Divisor from './components/divisor'

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-3 justify-start">
        <h2 className="text-slate-800 font-bold text-xl">Livros Cristaos Recomendados</h2>

        <BookItem />
        {/* <Divisor /> */}
        <div className="flex justify-center">
          <div className="join-ads" data-sizes="[[250, 250],[250, 360]]" data-bloco="Content1" data-mobile="1"></div>
          <div className="join-ads" data-sizes="[[250, 250],[250, 360]]" data-bloco="Content1" data-mobile="0"></div>
        </div>

        <BookItem />
        {/* <Divisor /> */}
        <div className="flex justify-center">
          <div className="join-ads" data-sizes="[[250, 250],[250, 360]]" data-bloco="Content2" data-mobile="1"></div>
          <div className="join-ads" data-sizes="[[250, 250],[250, 360]]" data-bloco="Content2" data-mobile="0"></div>
        </div>

        <BookItem />
        {/* <Divisor /> */}
        <div className="flex justify-center">
          <div className="join-ads" data-sizes="[[250, 250],[250, 360]]" data-bloco="Content3" data-mobile="1"></div>
          <div className="join-ads" data-sizes="[[250, 250],[250, 360]]" data-bloco="Content3" data-mobile="0"></div>
        </div>

        <BookItem />

        <div className="flex justify-center">
          <div className="join-ads" data-sizes="[[250, 250],[250, 360]]" data-bloco="Content4" data-mobile="1"></div>
          <div className="join-ads" data-sizes="[[250, 250],[250, 360]]" data-bloco="Content4" data-mobile="0"></div>
        </div>
      </div>
    </main>

  )
}
