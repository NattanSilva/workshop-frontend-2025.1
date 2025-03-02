import Image from 'next/image'

export default function Home() {
  return (
    <main className="md:h-screen flex justify-center md:items-center">
      <section className="w-3/4 md:w-[95%] flex flex-col md:flex-row-reverse items-center md:justify-center gap-2 mt-22 mb-4">
        <Image
          src={'Logo.svg'}
          alt="Logo"
          width={400}
          height={400}
          className="w-full md:w-[450px]"
        />
        <div className="md:w-1/3 flex flex-col items-center gap-2 bg-dragon-blue rounded-md p-4">
          <h1 className="font-bold font-pixel text-center text-yellow text-base md:text-lg">
            Bem-vindo ao Pokémon TCG!
          </h1>
          <p className="font-medium text-white text-center text-base md:text-lg">
            Entre no mundo das batalhas de cartas e desafie outros treinadores!
            Encontre tudo o que você precisa para aprimorar seu jogo e se tornar
            um mestre. Boa sorte, treinador!
          </p>
        </div>
      </section>
    </main>
  )
}
