import Image from 'next/image'
import {
  MagnifyingGlassIcon as SearchIcon,
  ShoppingCartIcon,
  Bars3Icon as MenuIcon
} from '@heroicons/react/24/outline'

function Header() {
  const user_name = 'Artem'
  return (
    <header className="text-white text-xs">
      {/* Top nav */}
      <div className="bg-amazon_blue flex items-center w-full p-1 py-2">
        <div className=" flex items-center flex-grow sm:flex-grow-0 mt-2">
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search Bar */}
        <div
          className="hidden sm:flex items-center h-12 bg-yellow-400 flex-grow rounded-md
        hover:bg-yellow-500"
        >
          <input
            className="text-black p-2 w-6 h-full flex-grow rounded-l-[inherit]
            focus:border focus:border-amazon_blue-light focus:border-offset-0 focus:border-r-transparent focus:outline-none"
            type="text"
          />
          <button>
            <SearchIcon className="h-12 p-4 cursor-pointer" />
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 mx-6">
          <button className="Link">
            <p>Hello, {user_name}</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </button>
          <button className="Link">
            <p>Returns</p>
            <p className="font-bold md:text-sm"> Orders</p>
          </button>
          <button className="Link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden font-bold md:text-sm md:flex mt-2">Basket</p>
          </button>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-amazon_blue-light flex items-center">
        <button className="Link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </button>

        <ul className="flex gap-4 ml-4">
          <li className="Link">Prime Video</li>
          <li className="Link">Amazon Business</li>
          <li className="Link">Today's Deals</li>
          <li className="Link hidden sm:inline-flex">Electronics</li>
          <li className="Link hidden sm:inline-flex">Food & Grocery</li>
          <li className="Link hidden md:inline-flex">Prime</li>
          <li className="Link hidden md:inline-flex">Buy Again</li>
          <li className="Link hidden md:inline-flex">Shopper Toolkit</li>
          <li className="Link hidden lg:inline-flex">Health & Personal Care</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
