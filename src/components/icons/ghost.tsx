import Image from 'next/image'

export function GhostIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-ghost-purple"
      src={'icons/ghost.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
