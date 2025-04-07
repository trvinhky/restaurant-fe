import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaRegCirclePlay } from "react-icons/fa6"
import { Caveat } from "next/font/google";
import cn from "@/utils/cn";
import Container from "@/components/container";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

const Banner = () => {
    return (
        <section className="bg-gray-200">
            <Container>
                <div className="col-span-2 flex justify-center items-center">
                    <div>
                        <h1 className={cn(
                            "text-6xl font-bold text-gray-700 tracking-wide leading-[1.3]",
                            caveat.className
                        )}>
                            Enjoy Your Healthy Delicious Food
                        </h1>
                        <p className="text-gray-600 pt-3 pb-7 text-xl">
                            We are team of talented designers making websites with Bootstrap
                        </p>
                        <div className="flex items-center gap-8">
                            <Button className="rounded-3xl" size="lg">
                                Book a Table
                            </Button>
                            <Link href="/" className="flex items-center gap-2 hover:text-red-700">
                                <FaRegCirclePlay size={32} className="text-red-700" />
                                <span>Watch Video</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-2 col-start-4 flex justify-end items-center">
                    <Image
                        src="/images/hero-img.png"
                        alt="banner"
                        fill
                        className="object-contain object-center animate-bounceY"
                    />
                </div>
            </Container>
        </section>
    )
}

export default Banner