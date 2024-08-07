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
        <div className="bg-zinc-600 flex items-center justify-center h-28 w-full border border-black">
            <div className="flex items-center justify-between w-11/12">
                <h3>SUBURBN.</h3>
                <Image src={'/Img/bag.svg'} width={20} height={20} alt="" />
            </div>
        </div>
    )
}

export default Navbar;
