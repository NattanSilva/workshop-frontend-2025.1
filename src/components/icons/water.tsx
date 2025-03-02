import Image from 'next/image'

export function WaterIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-water-blue"
      src={'icons/water.svg'}
      alt="water"
      width={24}
      height={24}
    />
  )
}
