import { Product } from "@/types/product"
import Image from "next/image"

const Card = ({ data }: { data: Product }) => {
    return (
        <div className="text-center flex flex-col justify-between items-center">
            <div className="p-4 w-full">
                <div className="relative h-[400px] w-full">
                    <Image
                        src={data.url}
                        alt={data.name}
                        fill
                        className="object-contain object-center"
                    />
                </div>
            </div>
            <h3 className="text-black text-2xl mb-1">
                {data.name}
            </h3>
            <p className="text-gray-500 mb-1 line-clamp-1">
                {data.description}
            </p>
            <span className="text-red-700 text-2xl font-bold">
                $ {data.price}
            </span>
        </div>
    )
}

export default Card