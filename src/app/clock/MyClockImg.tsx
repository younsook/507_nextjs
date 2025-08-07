import Image from 'next/image'

export default function MyClockImg() {
  return (
    <div className="w-full flex justify-center">
      <Image src={"/img/clock.png"} width={200} height={200} alt="시계" />
    </div>
  )
}