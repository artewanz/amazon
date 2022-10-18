import { GridAd } from '@assets'
import { IProduct } from '@src/types/IProduct'
import Image from 'next/image'
import Product from './Product'

type Props = {
  products: IProduct[]
  setProducts: Function
}

function ProductFeed({ products }: Props) {
  const Products = products.map((props) => (
    <Product key={props.id} {...props} />
  ))

  return (
    <section
      className="grid grid-flow-row-dense gap-10 mx-auto max-w-[95%]
        md:grid-cols-2
        lg:grid-cols-3 lg:-mt-40
        xl:grid-cols-4"
    >
      {Products}

      <figure className="col-span-full row-start-2 relative h-60">
        <Image
          src={GridAd}
          alt="Products from small & medium businesses"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
      </figure>
    </section>
  )
}

export default ProductFeed
