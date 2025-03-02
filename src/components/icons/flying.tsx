import Image from 'next/image'

export function FlyingIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-flying-cyan"
      src={'icons/flying.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
