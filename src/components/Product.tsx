import PrimeTag from '@components/UI/Prime'
import { IProduct } from '@src/types/IProduct'
import Image from 'next/image'

import { addToBasket, selectItems } from '@src/redux/slices/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
import Rating from './UI/Rating'

function Product({
  id,
  category,
  description,
  image,
  price,
  title,
  rating,
  hasPrime
}: IProduct) {
  const dispatch = useDispatch()
  const gridSpan = id % 5 == 0 ? ' md:col-span-2' : ''

  function addItemToBasket() {
    let product: IProduct = {
      id,
      category,
      description,
      image,
      price,
      title,
      rating,
      hasPrime
    }
    dispatch(addToBasket(product))
  }

  return (
    <article
      className={`relative flex flex-col bg-white z-10 p-4 gap-4 md:p-10${gridSpan}`}
    >
      <p className="absolute top-2 right-4 italic text-gray-500">{category}</p>
      <figure className="flex place-content-center">
        <Image src={image} width={200} height={200} objectFit="contain" />
      </figure>
      <h3 className="text-xl font-bold tracking-wide">{title}</h3>
      <Rating rating={rating} />
      <p className="font-bold text-lg">{price}$</p>
      <div>
        <p className="line-clamp-2">{description}</p>
        {hasPrime && <PrimeTag />}
      </div>

      <button onClick={addItemToBasket} className="Button p-3 mt-auto">
        Add to Basket
      </button>
    </article>
  )
}

export default Product
