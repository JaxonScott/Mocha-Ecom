import { NextResponse, NextRequest } from "next/server"
import prisma from "../../../prisma/client"

type CoffeeType = {
  name: string
  description: string
  price: number
  stock: number
}

export async function GET() {
  const coffee = await prisma.coffee.findMany()
  return NextResponse.json(coffee)
}

export async function POST(req: Request) {
  const data: CoffeeType = await req.json()
  try {
    const coffee = await prisma.coffee.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
      },
    })
    return NextResponse.json(coffee)
  } catch (error) {
    return new Response("ERROR: Make sure you include all info ❌", {
      status: 400,
    })
  }
}
