import Image from 'next/image'

export function IceIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-ice-cyan"
      src={'icons/ice.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
