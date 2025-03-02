import Image from 'next/image'

export function LoadingSpin() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <Image
      src={'/icons/pokebola.png'}
      alt="loading"
      width={240}
      height={240}
      className="animate-spin" />
    </div>
  )
}
