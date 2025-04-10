import Container from '@/components/container'
import React from 'react'
import Title from '@/components/title';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaCaretRight, FaCheck, FaPlay } from 'react-icons/fa';
import { BsClipboardData, BsInboxes } from 'react-icons/bs';
import { IoDiamondOutline } from 'react-icons/io5';

const About = () => {
    return (
        <section>
            <Container>
                <div className='col-span-5'>
                    <Title
                        sub='About Us'
                        left='Learn More'
                        right='About Us'
                    />
                    <div className="grid grid-cols-5 gap-14 mt-15 pb-15">
                        <div className="col-span-3">
                            <div className='flex flex-col h-full'>
                                <div className='min-h-[60vh] relative flex-1'>
                                    <Image
                                        src="/images/about.jpg"
                                        alt="banner"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="border-2 p-6 text-center font-bold text-2xl mt-6">
                                    <p className='pb-2'>
                                        Book a Table
                                    </p>
                                    <p className='text-red-700'>
                                        +1 5589 55488 55
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 rou">
                            <p className='text-gray-500 italic pb-4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li className='pb-3 flex gap-2'>
                                    <Button size="icon_sm" className='rounded-full'>
                                        <FaCheck size={10} />
                                    </Button>
                                    <span className='inline-block flex-1'>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                </li>
                                <li className='pb-3 flex gap-2'>
                                    <Button size="icon_sm" className='rounded-full'>
                                        <FaCheck size={10} />
                                    </Button>
                                    <span className='inline-block flex-1'>
                                        Duis aute irure dolor in reprehenderit in voluptate velit.
                                    </span>
                                </li>
                                <li className='flex gap-2'>
                                    <Button size="icon_sm" className='rounded-full'>
                                        <FaCheck size={10} />
                                    </Button>
                                    <span className='inline-block flex-1'>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                    </span>
                                </li>
                            </ul>
                            <p className='py-4'>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                            </p>
                            <div className='h-100 relative'>
                                <Image
                                    src="/images/about-2.jpg"
                                    alt="banner"
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className='absolute w-full h-full z-10 flex justify-center items-center'>
                                    <Button size="icon_xxl" className='rounded-full'>
                                        <FaPlay />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="py-15 bg-gray-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-5 gap-6">
                        <div className="col-span-2 bg-red-700 text-white">
                            <div className='p-8'>
                                <h4 className='font-bold text-4xl'>
                                    Why Choose Yummy
                                </h4>
                                <p className='py-8'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div className="flex justify-center items-center">
                                    <Button bg="secondary" className='rounded-3xl px-10'>
                                        <span>Learn More</span>
                                        <FaCaretRight />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white py-10 px-8 flex items-center justify-center flex-col text-center">
                            <Button size="icon_xxl" className='rounded-full' bg="banner">
                                <BsClipboardData size={32} />
                            </Button>
                            <h4 className='font-medium text-xl py-8'>
                                Corporis voluptates officia eiusmod
                            </h4>
                            <p className='text-gray-500'>
                                Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
                            </p>
                        </div>
                        <div className="bg-white py-10 px-8 flex items-center justify-center flex-col text-center">
                            <Button size="icon_xxl" className='rounded-full' bg="banner">
                                <IoDiamondOutline size={32} />
                            </Button>
                            <h4 className='font-medium text-xl py-8'>
                                Ullamco laboris ladore lore pan
                            </h4>
                            <p className='text-gray-500'>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            </p>
                        </div>
                        <div className="bg-white py-10 px-8 flex items-center justify-center flex-col text-center">
                            <Button size="icon_xxl" className='rounded-full' bg="banner">
                                <BsInboxes size={32} />
                            </Button>
                            <h4 className='font-medium text-xl py-8'>
                                Labore consequatur incidid dolore
                            </h4>
                            <p className='text-gray-500'>
                                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[50vh] bg-[url('/images/stats-bg.jpg')] bg-cover bg-center relative after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:z-0 after:bg-black/40 flex justify-center items-center">
                <div className="container mx-auto flex-1 relative z-1">
                    <div className="flex justify-evenly items-center">
                        <div className='font-bold'>
                            <h4 className='text-white text-5xl'>
                                232
                            </h4>
                            <p className='text-white/60'>
                                Clients
                            </p>
                        </div>
                        <div className='font-bold'>
                            <h4 className='text-white text-5xl'>
                                521
                            </h4>
                            <p className='text-white/60'>
                                Projects
                            </p>
                        </div>
                        <div className='font-bold'>
                            <h4 className='text-white text-5xl'>
                                1453
                            </h4>
                            <p className='text-white/60'>
                                Hours Of Support
                            </p>
                        </div>
                        <div className='font-bold'>
                            <h4 className='text-white text-5xl'>
                                32
                            </h4>
                            <p className='text-white/60'>
                                Workers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About