import { PrimeTag as PrimeTagImg } from '@assets'
import Image from 'next/image'

function PrimeTag() {
  return (
    <div className="flex gap-2 items-center">
      <figure className="flex items-center flex-shrink-0 w-12">
        <Image src={PrimeTagImg} />
      </figure>
      <span className="-mt-0.5">–</span>
      <span className="whitespace-nowrap text-sm text-gray-500 ">
        FREE Next-day Delivery
      </span>
    </div>
  )
}

export default PrimeTag
