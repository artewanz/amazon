import Image from 'next/image'
import {
  MagnifyingGlassIcon as SearchIcon,
  ShoppingCartIcon,
  Bars3Icon as MenuIcon
} from '@heroicons/react/24/outline'
import { Logo } from '@assets'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '@src/redux/slices/basketSlice'
import { IProduct } from '@src/types/IProduct'

function Header() {
  const session = useSession()
  const user_name = session.data?.user.name

  const router = useRouter()
  const items: IProduct[] = useSelector(selectItems)

  function openAccountAndListsDropdown() {}

  const SignInUser =
    session.status == 'unauthenticated' ? (
      <button className="Link font-bold text-base" onClick={() => signIn()}>
        <p>Sign In</p>
      </button>
    ) : (
      <button className="Link" onClick={() => signOut()}>
        <p>Hello, {user_name}</p>
        <p className="font-bold md:text-sm">Account & Lists</p>
      </button>
    )

  return (
    <header className="text-white text-xs sticky top-0 z-20">
      {/* Top nav */}
      <div className="bg-amazon_blue flex items-center justify-between w-full p-4 py-2">
        <button
          className="flex flex-none items-center mt-2 relative w-32 h-10"
          onClick={() => router.push('/')}
        >
          <Image
            src={Logo}
            className="cursor-pointer"
            layout="fill"
            objectFit="contain"
            objectPosition={'left center'}
          />
        </button>

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
          {SignInUser}
          <button className="Link">
            <p>Returns</p>
            <p className="font-bold md:text-sm"> Orders</p>
          </button>
          <button
            className="Link relative flex items-center"
            onClick={() => router.push('checkout')}
          >
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 text-center rounded-full text-black font-bold">
              {items.length}
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
          <li className="Link">Today`&apos;`s Deals</li>
          <li className="Link hidden sm:inline-flex">Electronics</li>
          <li className="Link hidden sm:inline-flex">Food & Grocery</li>
          <li className="Link hidden md:inline-flex">Prime</li>
          <li className="Link hidden md:inline-flex">Buy Again</li>
          <li className="Link hidden lg:inline-flex">Shopper Toolkit</li>
          <li className="Link hidden lg:inline-flex">Health & Personal Care</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
