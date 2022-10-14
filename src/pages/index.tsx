import type { NextPage } from 'next'

import Banner from '@src/components/Banner'
import ProductFeed from '@src/components/ProductFeed'
import { IProduct } from '@src/types/IProduct'
import DefaultLayout from '@src/layouts/DefaultLayout'

type Props = {
  products: IProduct[]
}

const Home: NextPage = ({ products }: Props) => {
  return (
    <DefaultLayout title={'Amazon'}>
      {/* Banner */}
      <Banner />
      {/* Product Feed */}
      <ProductFeed products={products} />
    </DefaultLayout>
  )
}

export default Home

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props: {
      products
    }
  }
}
