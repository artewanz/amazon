import { NextPage } from 'next'
import Image from 'next/image'
import { PrimeDayBanner } from '@assets'
import DefaultLayout from '@src/layouts/DefaultLayout'
import { useSelector } from 'react-redux'
import { selectItems } from '@src/redux/slices/basketSlice'
import CheckoutProduct from '@src/components/CheckoutProduct'
import { IProduct } from '@src/types/IProduct'
import { useSession } from 'next-auth/react'

const CheckoutPage: NextPage = () => {
  const session = useSession().data

  const items: (IProduct & { count: number })[] = useSelector(selectItems)

  const total = items.reduce((acc, item) => (acc += item.price), 0)

  const ProductList = items.map((product, i) => (
    <li key={i}>
      <CheckoutProduct {...product} />
    </li>
  ))

  return (
    <DefaultLayout title={'Checkout'}>
      <section className="flex flex-col lg:flex-row">
        {/* Cart */}
        <div className="flex-grow m-5 shadow-sm">
          <figure className="w-full">
            <Image
              src={PrimeDayBanner}
              objectFit="contain"
              objectPosition={'0 0'}
            />
          </figure>

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length > 0
                ? 'Your Shopping Basket'
                : 'Your Shopping Basket is empty.'}
            </h1>
          </div>

          <ul className="flex flex-col gap-8">{ProductList}</ul>
        </div>

        {/* Total */}
        {items.length > 0 && (
          <aside className="bg-white p-10 shadow-md fixed lg:static bottom-0 w-full">
            <div>
              <h2 className="whitespace-nowrap text-xl">
                Subtotal {items.length} items:
                <span className="font-bold ml-1">{total.toFixed(2)}$</span>
              </h2>

              <button className="Button w-full p-2 mt-2" disabled={!session}>
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </div>
          </aside>
        )}
      </section>
    </DefaultLayout>
  )
}

export default CheckoutPage
