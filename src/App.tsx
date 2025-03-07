// src/App.tsx

function App() {
  return (
    <div>
      <header>
        <div className="header-content">
          <div className="header-left">
            <h1 className="text-3xl font-bold p-4text-white">
              Organizaê
            </h1>
          </div>
          <div className="header-right">
            <nav>
              <ul className="flex">
                <li className="p-4">Home</li>
                <li className="p-4">Sobre</li>
                <li className="p-4">Contato</li>
              </ul>
            </nav>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
        </div>
      </header>
      <section className="banner bg-gray-200 p-4">
        <h2>Olá, Mundo!</h2>
        <p>
          Este é um parágrafo
        </p>
      </section>
      <section className="body-content">
        <h2>Conteúdo</h2>
        <p> 
          Este é um parágrafo
        </p>
      </section>
      <footer>
        <div className="footer-content">
          <p>
            Este é um rodapé
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App