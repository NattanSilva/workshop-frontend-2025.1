import Image from 'next/image'

export function DarkIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-dark-gray"
      src={'icons/dark.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
