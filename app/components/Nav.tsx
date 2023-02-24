import { IoBagOutline } from "react-icons/io5"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"

export default function Nav() {
  return (
    <div className="bg-zinc-900  rounded-b-lg text-gray-200 px-2 list-none sticky top-0 border-b border-x border-zinc-600 ">
      <div className="flex  justify-center md:justify-between  px-4 pt-1 text-xs font-bold border-b-[1px] pb-1 border-zinc-800 ">
        <div>
          <li>Free Domestic Shipping! </li>
        </div>
        <div className=" gap-2 hidden md:flex  ">
          <li>Info</li>
          <li>Login</li>
        </div>
      </div>
      <div className="flex justify-between p-4 ">
        <div className="font-bold text-lg mt-1">MOCHA</div>
        <div className="gap-4 pt-1 text-lg font-bold text-gray-300  hidden lg:flex  ">
          <li className="hover:text-gray-200">Blends</li>
          <li className="hover:text-gray-200">Apparel</li>
        </div>
        <div className="flex  gap-2">
          <li className="rounded-full bg-zinc-900 hover:bg-zinc-600 hover:bg-opacity-20 p-2 mt-1 ">
            <BsSearch className="font-bold text-xl  " />
          </li>
          <li className="hover:bg-zinc-600 hover:bg-opacity-20 p-2 rounded-full">
            <p className="absolute bg-green-400 text-black px-1 rounded-full text-sm right-6 top-14 mt-0.5  ">
              0
            </p>
            <IoBagOutline className="font-bold text-2xl " />
          </li>
        </div>
      </div>
    </div>
  )
}
