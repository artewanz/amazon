import { PrimeTag } from '@assets'
import { StarIcon } from '@heroicons/react/24/solid'
import { colors } from '@src/styles/styles'
import { IProduct } from '@src/types/IProduct'
import Image from 'next/image'
import { useState } from 'react'

function Product({ id, category, description, image, price, title }: IProduct) {
  const [rating] = useState(5)
  const [hasPrime] = useState(true)

  const gridSpan = id % 5 == 0 ? ' md:col-span-2' : ''

  const Rating = Array(rating)
    .fill(null)
    .map((_, i) => <StarIcon key={i} width={20} color={colors.yellow[500]} />)

  const Prime = (
    <div className="flex gap-2 items-center">
      {hasPrime && <img src={PrimeTag.src} className="w-12" />}
      <span className="-mt-0.5">–</span>
      <span className="whitespace-nowrap text-sm text-gray-500 ">
        FREE Next-day Delivery
      </span>
    </div>
  )

  return (
    <article
      className={`relative flex flex-col bg-white z-10 p-4 gap-4 md:p-10${gridSpan}`}
    >
      <p className="absolute top-2 right-4 italic text-gray-500">{category}</p>
      <figure className="flex place-content-center">
        <Image src={image} width={200} height={200} objectFit="contain" />
      </figure>
      <h3 className="text-xl font-bold tracking-wide">{title}</h3>
      <div className="flex">{Rating}</div>
      <p className="font-bold text-lg">{price}$</p>
      <div>
        <p className="line-clamp-2">{description}</p>
        {Prime}
      </div>
      <button className="Button p-3 mt-auto">Add to Basket</button>
    </article>
  )
}

export default Product
