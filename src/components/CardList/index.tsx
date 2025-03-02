'use client'

import { api } from '@/services/api'
import { useEffect, useState } from 'react'
import { type Card, CardItem } from '../CardItem'

export function CardList() {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    api
      .get('/cards/')
      .then(response => setCards(response.data.data))
      .catch(error => console.log(error))
  })

  return (
    <ul className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-between gap-4 md:gap-0">
      {cards?.length > 0 ? (
        cards.map((card: Card) => <CardItem key={card.id} card={card} />)
      ) : (
        <div>Carregando...</div>
      )}
    </ul>
  )
}
