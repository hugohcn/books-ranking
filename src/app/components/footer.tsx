const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 bg-white ">
      <div className="py-6">

        <p className="text-center text-sm leading-6 text-slate-500">
          &copy; 2023 Eliza Martins.
        </p>
        <p className="text-center text-sm leading-6 text-slate-500">
          Todos os direitos reservados.
        </p>
        <div className="mt-2 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="https://elizamartins.com/politica-de-privacidade" target="_blank">Politica de Privacidade</a>
          <div className="h-4 w-px bg-slate-500/20"></div>
          <a href="https://elizamartins.com/termos-e-condicoes" target="_blank">Termos e Condicoes</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer