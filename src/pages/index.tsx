import type { NextPage } from 'next'

import Banner from '@src/components/Banner'
import ProductFeed from '@src/components/ProductFeed'
import { IProduct } from '@src/types/IProduct'
import DefaultLayout from '@src/layouts/DefaultLayout'
import { useState } from 'react'

type Props = {
  products: IProduct[]
}

const Home: NextPage = (props: Props) => {
  const [products, setProducts] = useState(props.products)
  return (
    <DefaultLayout title={'Amazon'}>
      {/* Banner */}
      <Banner />
      {/* Product Feed */}
      <ProductFeed products={products} setProducts={setProducts} />
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
      products: products.map((prod) => ({
        ...prod,
        hasPrime: true,
        rating: Math.random() * 5
      }))
    }
  }
}
