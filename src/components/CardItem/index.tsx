import Image from 'next/image'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { TypeIcons } from '../icons'

export type Card = {
  id: string
  name: string
  types: string[]
  images: {
    small: string
    large: string
  }
}

interface CardProps extends ComponentProps<'li'> {
  card: Card
}

export function CardItem({ card, ...props }: Readonly<CardProps>) {
  const { name, types, images } = card

  return (
    <li {...props} className="w-full md:w-1/5 h-80 relative mb-4">
      <Link
        className="w-full h-full relative rounded-xl overflow-hidden"
        href={`/cards/${card.id}`}
      >
        <Image
          src={images.large}
          alt={name}
          width={240}
          height={320}
          className="-z-10 w-full h-full rounded-xl"
        />
        <div className="w-full h-1/2 p-4 z-20 absolute bottom-0 left-0 rounded-b-xl text-brown backdrop-blur-md">
          <h2 className="font-bold text-lg">Nome: {name}</h2>
          <p className="font-semibold">
            Tipos: <TypeIcons types={types} />
          </p>
        </div>
      </Link>
    </li>
  )
}
