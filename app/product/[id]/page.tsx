import { getProduct } from "@/lib/api"
import Price from "@/lib/Price"
import Image from "next/image"

const API_BASE = process.env.API_BASE

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    const product = await getProduct(id)

    return (
        <div className="px-10 py-16 grid grid-cols-2 gap-10">

            <Image
                src={`${API_BASE}${product.image}`}
                alt={product.name}
                width={600}
                height={600}
                className="object-cover w-full"
            />
            <div>

                <h1 className="text-4xl font-bold">
                    {product.name}
                </h1>

                {/* <p className="text-xl mt-4">
                    ${product.price}
                </p> */}
                <Price amount={product.price} className="text-xl mt-4"/>
                

                <p className="mt-6 text-gray-600">
                    {product.description}
                </p>

            </div>

        </div>
    )
}