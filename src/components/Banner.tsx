import { Carousel } from 'react-responsive-carousel'
import { Banner1, Banner2, Banner3 } from '@assets'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

function Banner() {
  return (
    <section id="banner" className="relative">
      <div className="bg-gradient-to-t from-gray-100 to-transparent absolute inset-x-0 h-40 bottom-0 z-[1]" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="slider"
      >
        <figure className="w-full lg:h-[50vh] h-[20vh] relative">
          <Image
            src={Banner1}
            alt=""
            layout="fill"
            priority
            objectPosition={'top center'}
          />
        </figure>
        <figure className="w-full lg:h-[50vh] h-[20vh] relative">
          <Image
            src={Banner2}
            alt=""
            layout="fill"
            objectPosition={'top center'}
          />
        </figure>
        <figure className="w-full lg:h-[50vh] h-[20vh] relative">
          <Image
            src={Banner3}
            alt=""
            layout="fill"
            objectPosition={'top center'}
          />
        </figure>
      </Carousel>
    </section>
  )
}

export default Banner
