import Image from 'next/image'

export function GroundIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-ground-brown"
      src={'icons/ground.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
