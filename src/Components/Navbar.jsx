'use client'
import useCart from "@/lib/useCart";
import gsap from "gsap";
import { Poppins } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import MenuBar from "./MenuBar";
import SearchBox from "./SearchBox";

const popp = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '800']
});

const Navbar = () => {

    return (
        <>
            <div className='flex items-center justify-center h-20 shadow-sm top-0 bg-zinc-600 z-20 border-b border-black w-full'>
                <div className='flex items-center justify-between w-11/12'>
                    <MenuBar />
                    <div id="logo" className='flex justify-center'>
                        <Image src={'/Img/logo-black.svg'} width={100} height={100} alt='' />
                    </div>
                    <div className='flex items-center justify-end space-x-5'>
                        <SearchBox />
                        <Link href={'/cart'}>
                            <Image id="cart-icon" src={'/Img/bag.svg'} width={30} height={30} alt='bag' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
