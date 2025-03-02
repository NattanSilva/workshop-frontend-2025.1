import Image from 'next/image'

export function FightingIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-fighting-pink"
      src={'icons/fighting.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
