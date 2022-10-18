import { IProduct } from '@src/types/IProduct'
import Image from 'next/image'
import PrimeTag from './UI/Prime'
import QuantityCounter from './UI/QuantityCounter'
import Rating from './UI/Rating'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '@src/redux/slices/basketSlice'

type Props = IProduct & { count: number }

function CheckoutProduct({
  id,
  count: quantity,
  description,
  image,
  price,
  title,
  rating,
  hasPrime = false
}: Props) {
  const dispatch = useDispatch()

  function addItemToBasket() {
    dispatch(
      addToBasket({ id, description, image, price, title, rating, hasPrime })
    )
  }

  function removeItemFromBasket() {
    dispatch(removeFromBasket({ id }))
  }

  return (
    <article className="bg-white flex flex-col md:flex-row p-8">
      <figure className="text-center flex-shrink-0 mb-4 md:mb-0">
        <Image src={image} width={200} height={200} objectFit="contain" />
      </figure>

      <div className="flex-grow space-y-4">
        <h3 className="text-xl font-bold tracking-wide">{title}</h3>
        <Rating rating={rating} />
        <p className="font-bold text-lg">{price}$</p>
        <div>
          <p className="line-clamp-3">{description}</p>
          {hasPrime && <PrimeTag />}
        </div>
      </div>

      <div
        className="flex md:p-8 gap-2 min-w-fit justify-end
      md:flex-col md:justify-center"
      >
        <button
          className="Button px-4 py-2 ml-2 md:ml-8"
          onClick={addItemToBasket}
        >
          Add More
        </button>
        <button
          className="Button px-8 py-2 ml-2 md:ml-8"
          onClick={removeItemFromBasket}
        >
          Remove
        </button>
      </div>
    </article>
  )
}

export default CheckoutProduct
