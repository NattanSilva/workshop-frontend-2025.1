import Link from 'next/link'
import MobileMenuButton from '../MobileMenuButton'

export function Navbar() {
  return (
    <header className="w-full h-20 flex items-center justify-center bg-[#de5239] top-0 z-50 fixed">
      <nav className="w-3/4 md:w-[95%] flex items-center justify-between">
        <h1 className="font-bold text-base text-[#ffd608] font-pixel">
          Pokemon TCG
        </h1>
        <ul className="hidden md:flex gap-4">
          <li>
            <Link
              className="flex items-center justify-center transition-colors bg-light-blue px-4 py-1.5 rounded-md text-white font-semibold text-md cursor-pointer"
              href={'/'}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center justify-center transition-colors bg-light-blue px-4 py-1.5 rounded-md text-white font-semibold text-md cursor-pointer"
              href={'/cards'}
            >
              Cartas
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <MobileMenuButton />
        </div>
      </nav>
    </header>
  )
}
