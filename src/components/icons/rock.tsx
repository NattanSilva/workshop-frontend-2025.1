import Image from 'next/image'

export function RockIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-rock-brown"
      src={'icons/rock.svg'}
      alt="rock"
      width={24}
      height={24}
    />
  )
}
