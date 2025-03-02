import Image from 'next/image'

export function BugIcon() {
  return (
    <Image
      className="w-8 h-8 p1 rounded-full bg-bug-green"
      src={'icons/bug.svg'}
      alt="Bug"
      width={24}
      height={24}
    />
  )
}
