"use client"

import { useState } from "react"
import Image from "next/image"
import productImg from "../../public/productImg.jpg"
import { AiOutlinePlus } from "react-icons/ai"
import Link from "next/link"

interface IProps {
  id: string
  name: string
  description: string
  price: number
  stock: number
}

export default function Card({ id, name, description, price, stock }: IProps) {
  const [isHovering, setIsHovering] = useState(false)
  const onMouseEnter = () => setIsHovering(true)
  const onMouseLeave = () => setIsHovering(false)
  console.log(isHovering)
  return (
    <div
      className="flex flex-col mx-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div>
        <div className="sticky">
          <div className="absolute top-2 left-2">
            <p className=" bg-gray-500 bg-opacity-70 text-white text-xs p-0.5 px-1 rounded-lg font-bold">
              New
            </p>
          </div>
        </div>

        <Image
          src={productImg}
          alt="coffee cup"
          loading="lazy"
          width={300}
          className="rounded-lg"
        />
        {isHovering ? (
          <div className="sticky mx-2">
            <div
              className={`absolute bottom-0 w-full  text-white bg-black rounded-t-lg text-sm font-bold p-2 flex justify-center`}
            >
              <p>Quick Add</p> <AiOutlinePlus className="mt-1" />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="font-bold text-gray-200 ">
        <p className="text-md">{name}</p>
        <div className="flex text-xs gap-1">
          <p className="pt-1 font-semibold">chocolate</p>
          <p className="font-semibold bg-gray-200 bg-opacity-20 p-1 rounded-md">
            blend
          </p>
        </div>
        <p className="text-sm">${price}</p>
      </div>
    </div>
  )
}
