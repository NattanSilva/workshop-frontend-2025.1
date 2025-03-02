import Image from 'next/image'

export function ColorlessIcon() {
  return (
    <Image
      className="w-8 h-8 rounded-full"
      src={'/icons/colorless.png'}
      alt="water"
      width={24}
      height={24}
    />
  )
}
