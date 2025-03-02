'use client'

import { api } from "@/services/api"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import type { Card } from "../CardItem"
import { TypeIcons } from "../icons"
import { LoadingSpin } from "../LoadingSpin"

export function CardDetail({ id }: Readonly<{ id: string }>) {
  const [card, setCard] = useState<Card | null>(null)

  useEffect(() => {
    api
      .get(`/cards/${id}`)
      .then(response => setCard(response.data.data))
      .catch(error => console.log(error))
  })

  return (
    <div>
      {card ? (
        <div className="flex flex-col gap-2 md:flex-row bg-orange p-4 rounded-lg">
          <Image src={card.images.large} alt={card.name} width={240} height={320} className="md:w-[320px]" />
          <div className="font-semibold flex flex-col gap-2">
            <h2 className="bg-white border-2 border-light-blue rounded-md md:text-2xl md:p-4">Nome: {card.name}</h2>
            <p className="bg-white border-2 border-light-blue rounded-md md:text-2xl md:p-4">Supertype: {card.supertype}</p>
            <p className="bg-white border-2 border-light-blue rounded-md md:text-2xl md:p-4">HP: {card.hp}</p>
            <div className="flex gap-2 bg-white border-2 border-light-blue rounded-md items-center p-2 md:p-4">
              <p className="md:text-2xl font-semibold">Tipos:</p>
              <TypeIcons types={card.types} />
            </div>
            <Link href={card.tcgplayer.url} target="_blank" className="flex items-center justify-center cursor-pointer bg-light-blue p-2 rounded-md text-lg text-white font-semibold md:text-2xl md:p-4">Ver no Mercado</Link>
          </div>
        </div>
      ) : (
        <LoadingSpin />
      )}
    </div>
  )
}
