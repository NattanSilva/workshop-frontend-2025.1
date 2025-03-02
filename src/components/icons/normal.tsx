import Image from 'next/image'

export function NormalIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-normal-gray"
      src={'icons/normal.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
