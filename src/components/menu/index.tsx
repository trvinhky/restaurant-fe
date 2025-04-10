"use client"
import Card from "@/components/card"
import Carousel from "@/components/carousel"
import Container from "@/components/container"
import Title from "@/components/title"
import { Product } from "@/types/product"
import { Review } from "@/types/review"
import cn from "@/utils/cn"
import { Caveat } from "next/font/google"
import { useState } from "react"

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

const Menu = () => {
    const listMenu = ['Starters', 'Breakfast', 'Lunch', 'Dinner']
    const [activeTag, setActiveTag] = useState(0)
    const data: Product[] = [
        {
            id: 'a1',
            name: 'Magnam Tiste',
            description: 'Lorem, deren, trataro, filede, nerada',
            price: 5.95,
            url: '/products/menu-item-1.png'
        },
        {
            id: 'a2',
            name: 'Aut Luia',
            description: 'Lorem, deren, trataro, filede, nerada',
            price: 14.95,
            url: '/products/menu-item-2.png'
        },
        {
            id: 'a3',
            name: 'Est Eligendi',
            description: 'Lorem, deren, trataro, filede, nerada',
            price: 8.95,
            url: '/products/menu-item-3.png'
        },
        {
            id: 'a4',
            name: 'Eos Luibusdam',
            description: 'Lorem, deren, trataro, filede, nerada',
            price: 12.95,
            url: '/products/menu-item-4.png'
        },
        {
            id: 'a5',
            name: 'Eos Luibusdam',
            description: 'Lorem, deren, trataro, filede, nerada',
            price: 12.95,
            url: '/products/menu-item-5.png'
        },
        {
            id: 'a6',
            name: 'Laboriosam Direva',
            description: 'Lorem, deren, trataro, filede, nerada',
            price: 9.95,
            url: '/products/menu-item-6.png'
        }
    ]
    const reviews: Review[] = [
        {
            id: 'r1',
            name: 'Saul Goodman',
            position: 'Ceo & Founder',
            description: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
            rate: 5,
            url: '/avatars/testimonials-1.jpg'
        },
        {
            id: 'r2',
            name: 'Sara Wilsson',
            position: 'Designer',
            description: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
            rate: 5,
            url: '/avatars/testimonials-2.jpg'
        },
        {
            id: 'r3',
            name: 'Jena Karlis',
            position: 'Store Owner',
            description: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
            rate: 5,
            url: '/avatars/testimonials-3.jpg'
        },
        {
            id: 'r4',
            name: 'John Larson',
            position: 'Entrepreneur',
            description: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
            rate: 5,
            url: '/avatars/testimonials-4.jpg'
        }
    ]

    return (
        <section>
            <Container>
                <div className="col-span-5">
                    <Title
                        sub='Our Menu'
                        left='Check Our'
                        right='Yummy Menu'
                    />
                    <ul className="flex justify-center items-center gap-4 pt-10 pb-5">
                        {
                            listMenu.map((item, i) => (
                                <li
                                    className={cn(
                                        "relative capitalize font-medium after:content-[''] after:absolute after:left-0 after:h-0.5 after:-bottom-1.5 after:duration-300 after:w-full after:ease-in-out hover:after:bg-red-500 cursor-pointer px-4 py-1 text-lg hover:text-black",
                                        activeTag === i ? 'text-black after:bg-red-500' : 'text-gray-500 after:bg-gray-500'
                                    )}
                                    key={item}
                                    onClick={() => setActiveTag(i)}
                                >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                    <div>
                        <div className="text-center uppercase pt-4">
                            <p className="text-sm text-gray-500 pb-2">
                                Menu
                            </p>
                            <h4
                                className={cn(
                                    'text-5xl font-bold text-red-700',
                                    caveat.className
                                )}
                            >
                                Lunch
                            </h4>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-6">
                            {
                                data.map((item) => (
                                    <Card data={item} key={item.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
            <div className="bg-gray-200 py-15">
                <div className="mx-auto w-[50vw]">
                    <Title
                        sub="TESTIMONIALS"
                        left="What Are They"
                        right="Saying About Us"
                    />
                    <div className="mt-15"></div>
                    <Carousel slides={reviews} />
                </div>
            </div>
        </section>
    )
}

export default Menu