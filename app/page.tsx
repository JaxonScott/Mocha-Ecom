"use client"
import { CoffeeType } from "./types/Coffee"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Card from "./components/Card"

const getCoffee = async () => {
  const response = await axios.get("http://localhost:3000/api/coffee")
  return response.data
}

export default function Home() {
  const { data, error } = useQuery<CoffeeType[]>({
    queryKey: ["get-coffee"],
    queryFn: getCoffee,
  })
  console.log(data)
  return (
    <main>
      <h1 className="ml-8 mt-8 text-gray-200 font-bold text-xl">
        <span className="text-base font-semibold">Shop</span> <br /> Newest Blends
      </h1>
      <div className="flex flex-wrap gap-2 gap mt-8">
        {data?.map((i) => (
          <Card
            id={i.id}
            name={i.name}
            description={i.description}
            price={i.price}
            stock={i.stock}
          />
        ))}
      </div>
    </main>
  )
}
