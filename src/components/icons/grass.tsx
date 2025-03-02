import Image from 'next/image'

export function GrassIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-grass-green"
      src={'icons/grass.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
