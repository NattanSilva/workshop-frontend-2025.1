import Image from 'next/image'

export function DragonIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-dragon-blue"
      src={'icons/dragon.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
