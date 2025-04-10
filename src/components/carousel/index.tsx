'use client';
import { Review } from '@/types/review';
import cn from '@/utils/cn';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

export default function Carousel({ slides }: { slides: Review[] }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000); // chuyển mỗi 3s

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="relative w-full overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full flex justify-between items-center gap-6 border-l-3 border-red-700 pl-7">
                            <div className='flex-1'>
                                <p className='flex flex-wrap items-center italic pb-3'>
                                    <FaQuoteLeft className='text-red-900' /> <span>{slide.description}</span> <FaQuoteRight className='text-red-900' />
                                </p>
                                <span className={cn(
                                    'block text-xl font-bold',
                                    caveat.className
                                )}>
                                    {slide.name}
                                </span>
                                <span className='block text-gray-500 text-sm'>
                                    {slide.position}
                                </span>
                                <div className="flex items-center mt-2 text-yellow-400">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                </div>
                            </div>
                            <div className='relative'>
                                <Image
                                    src={slide.url}
                                    alt={slide.name}
                                    width={200}
                                    height={200}
                                    className='object-center object-cover rounded-full'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, idx) => (
                        <div
                            onClick={() => setCurrent(idx)}
                            key={idx}
                            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-red-700' : 'bg-gray-400'} cursor-pointer transition-all`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
