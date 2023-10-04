interface Book {
  name: string,
  author: string,
  thumbnail: string,
  url: string,
  price: number,
  pages_count: number
}

interface BookItemProps {
  book?: Book
}


const BookItem = ({ book }: BookItemProps) => {
  const { name, author, thumbnail, url, price, pages_count }: any = book

  return (
    <div className="max-w bg-white rounded-md overflow-hidden shadow-md cursor-pointer flex flex-col sm:flex-row p-3 gap-3 sm:p-6 sm:gap-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full">
        <div className="flex flex-row gap-3 sm:gap-6">
          <div className=" flex flex-col sm:flex-row justify-center align-middle">
            <div className="flex-shrink-0 overflow-hidden rounded-md border border-gray-200 w-28">
              <img src={thumbnail} alt={name} className="h-full w-full object-cover object-center" />
            </div>
          </div>

          <div className="max-w-md bg-white">
            <h2 className="text-base sm:text-lg font-semibold text-slate-800">{name}</h2>
            <small className="mt-4 text-xs sm:text-sm text-orange-600 font-semibold">Por {author}</small>

            <p className="mt-1 text-xl sm:text-xl font-semibold text-slate-600">R$ {(Math.round(price * 100) / 100).toFixed(2)}</p>

            <div className="flex flex-col mt-3 sm:mt-2 justify-start">
              <span className="text-slate-500 ml-1 text-xs sm:text-sm"><strong>Formato:</strong> eBook</span>
              <span className="text-slate-500 ml-1 text-xs sm:text-sm mt-1"><strong>Qtd. Paginas:</strong> {pages_count}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center align-baseline content-end max-w sm:min-w-fit sm:w-auto mt-2">
          <a href={url} className="rounded border border-transparent uppercase bg-orange-600 p-2 text-sm sm:text-base text-center font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            Ler Gratuitamente
          </a>
        </div>
      </div>
    </div>
  )
}

export default BookItem