import Image from 'next/image'

export function FireIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-fire-orange"
      src={'icons/fire.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
