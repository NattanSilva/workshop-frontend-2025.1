import Image from 'next/image'

export function PsychicIcon() {
  return (
    <Image
      className="w-8 h-8 p-1 rounded-full bg-psychic-pink"
      src={'icons/psychic.svg'}
      alt="psychic"
      width={24}
      height={24}
    />
  )
}
