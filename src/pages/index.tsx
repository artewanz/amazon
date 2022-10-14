import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@components/Header'
import Banner from '@src/components/Banner'
import ProductFeed from '@src/components/ProductFeed'
import { IProduct } from '@src/types/IProduct'

type Props = {
  products: IProduct[]
}

const Home: NextPage = ({ products }: Props) => {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
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
