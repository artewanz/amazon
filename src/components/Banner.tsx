import { Carousel } from 'react-responsive-carousel'
import { Banner1, Banner2, Banner3 } from '@assets'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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
        <div>
          <img loading="lazy" src={Banner1.src} alt="" />
        </div>
        <div>
          <img loading="lazy" src={Banner2.src} alt="" />
        </div>
        <div>
          <img loading="lazy" src={Banner3.src} alt="" />
        </div>
      </Carousel>
    </section>
  )
}

export default Banner
