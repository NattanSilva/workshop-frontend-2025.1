import Image from 'next/image'

export function PoisonIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-poison-pink"
      src={'icons/poison.svg'}
      alt="poison"
      width={24}
      height={24}
    />
  )
}
