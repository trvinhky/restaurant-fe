"use client"

import { Button } from "@/components/ui/button"
import cn from "@/utils/cn";
import Link from "next/link"
import { useEffect, useState } from "react";

const listItems = [
    {
        href: "#home",
        name: "Home"
    },
    {
        href: "#about",
        name: "About"
    },
    {
        href: "#menu",
        name: "Menu"
    },
    {
        href: "#events",
        name: "Events"
    },
    {
        href: "#chefs",
        name: "Chefs"
    },
    {
        href: "#gallery",
        name: "Gallery"
    },
    {
        href: "#contact",
        name: "Contact"
    },
]

const Header = () => {
    const [hash, setHash] = useState("");

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash || listItems[0].href);
        handleHashChange()

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <header className="py-5 fixed top-0 left-0 w-full z-50 bg-white shadow-2xs">
            <div className="flex justify-between items-center container mx-auto">
                <Link href="/" className="text-3xl font-bold">
                    <span>Yummy</span>
                    <span className="text-red-700">.</span>
                </Link>
                <nav>
                    <ul className="flex items-center">
                        {
                            listItems.map((item) => (
                                <li className="p-4 group capitalize" key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setHash(item.href)}
                                        className={cn(
                                            "relative font-medium after:content-[''] after:absolute after:left-0 after:h-0.5 after:bg-red-700 after:-bottom-1.5 after:duration-300 text-gray-500 group-hover:after:w-full after:ease-in-out group-hover:after:visible group-hover:text-black",
                                            hash === item.href ? 'after:w-full after:visible text-black' : 'after:w-0 after:invisible'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Button className="rounded-3xl">
                    Book a Table
                </Button>
            </div>
        </header>
    )
}

export default Header