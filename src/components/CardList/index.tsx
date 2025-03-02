'use client'

import { api } from '@/services/api'
import { useEffect, useState } from 'react'
import { type Card, CardItem } from '../CardItem'
import { LoadingSpin } from '../LoadingSpin'

export function CardList() {
  const [cards, setCards] = useState<Card[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/cards?pageSize=16')
      .then(response => {
        setCards(response.data.data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  })

  return (
    <div className="w-full flex items-center justify-center">
      {loading ? (
        <LoadingSpin />
      ) : (
        <ul className="w-full lg:h-full flex flex-col md:flex-row md:flex-wrap md:justify-between gap-4 md:gap-0">
          {cards?.length > 0 && (
            cards.map((card: Card) => <CardItem key={card.id} card={card} />)
          )}
        </ul>
      )}
    </div>
  )
}
