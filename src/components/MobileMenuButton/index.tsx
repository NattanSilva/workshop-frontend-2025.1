import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export default function MobileMenuButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-light-blue text-white" type="button">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent style={{ backgroundColor: '#de5239' }}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="w-full p-2">
          <ul className="flex flex-col gap-2">
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
        </nav>
      </SheetContent>
    </Sheet>
  )
}
