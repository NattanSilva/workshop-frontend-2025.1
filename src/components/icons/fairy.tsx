import Image from 'next/image'

export function FairyIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-fairy-pink"
      src={'icons/fairy.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
