import { GridAd } from '@assets'
import { IProduct } from '@src/types/IProduct'
import Product from './Product'

type Props = {
  products: IProduct[]
}

function ProductFeed({ products }: Props) {
  const Products = products.map((props) => (
    <Product key={props.id} {...props} />
  ))

  return (
    <section
      className="grid grid-flow-row-dense gap-10 mx-auto max-w-[95%]
        md:grid-cols-2 md:-mt-40
        lg:grid-cols-3 lg:-mt-52
        xl:grid-cols-4 "
    >
      {Products}

      <figure className="col-span-full row-start-2">
        <img
          src={GridAd.src}
          alt="Products from small & medium businesses"
          className="min-h-[200px] object-cover object-center"
        />
      </figure>
    </section>
  )
}

export default ProductFeed
