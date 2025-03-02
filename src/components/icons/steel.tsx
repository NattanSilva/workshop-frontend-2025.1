import Image from 'next/image'

export function SteelIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-steel-cyan"
      src={'icons/steel.svg'}
      alt="steel"
      width={24}
      height={24}
    />
  )
}
