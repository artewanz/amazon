import { NextPage } from 'next'
import Image from 'next/image'
import { PrimeDayBanner } from '@assets'
import DefaultLayout from '@src/layouts/DefaultLayout'

const CheckoutPage: NextPage = () => (
  <DefaultLayout title={'Checkout'}>
    <div className="lg:flex">
      {/* Left Side */}
      <div className="flex-grow m-5 shadow-sm">
        <figure>
          <Image
            src={PrimeDayBanner}
            width={1020}
            height={250}
            objectFit="contain"
          />
        </figure>

        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
        </div>
      </div>

      {/* Right Side */}
      <div></div>
    </div>
  </DefaultLayout>
)

export default CheckoutPage
