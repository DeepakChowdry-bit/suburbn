'use client'
import useCart from "@/lib/useCart";
import gsap from "gsap";
import { Poppins } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const popp = Poppins({
    subsets: ["latin"],
    weight: ['100', '200', '800']
});

const Navbar = () => {
    const menuBtnRef = useRef(null);
    const menuRef = useRef(null);
    const path1 = useRef(null);
    const path2 = useRef(null);

    const searchIcon = useRef(null);
    const searchBox = useRef(null);
    let isMenuOpen = false;
    let isSearchOpen = false;

    // addToCart(gsap.to('car'))

    useEffect(() => {
        const handleMenuClick = () => {
            if (isMenuOpen) {
                gsap.to(path1.current, {
                    attr: { d: "M 0 5 L 25 5" },
                });

                gsap.to(path2.current, {
                    attr: { d: "M 0 13 L 25 13" },
                });

                gsap.to(menuRef.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.5,
                });

                isMenuOpen = false;
            } else {
                gsap.to(path1.current, {
                    attr: { d: "M 0 0 L 17 16" },
                });

                gsap.to(path2.current, {
                    attr: { d: "M 0 16 L 17 1" },
                });

                gsap.to(menuRef.current, {
                    height: '400px',
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.1,
                });

                isMenuOpen = true;
            }
        };

        const handleSearchClick = () => {
            if (isSearchOpen) {
                gsap.to(searchBox.current, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                });
                gsap.to('#buttons', {
                    width: '33.33%',
                    duration: 0.8,
                })
                gsap.to(menuBtnRef.current, {
                    opacity: 1,
                    duration: 0.6,
                })
                gsap.to('#logo', {
                    justifyContent: 'center',
                    width: '33.33%',
                    duration: 0.5,
                })
                isSearchOpen = false;
            } else {
                gsap.to(searchBox.current, {
                    height: '340px',
                    opacity: 1,
                    duration: 0.5,
                });
                gsap.to('#buttons', {
                    width: 0,
                    duration: 0.8,
                })
                gsap.to(menuBtnRef.current, {
                    opacity: 0,
                    duration: 0.6,
                })
                gsap.to('#logo', {
                    justifyContent: 'start',
                    width: '100%',
                    duration: 0.5,
                })
                isSearchOpen = true;
            }
        };

        const menuButton = menuBtnRef.current;
        menuButton.addEventListener('click', handleMenuClick);

        const searchButton = searchIcon.current;
        searchButton.addEventListener('click', handleSearchClick);

        return () => {
            menuButton.removeEventListener('click', handleMenuClick);
            searchButton.removeEventListener('click', handleSearchClick);
        };
    }, []);

    return (
        <>
            <div className='flex items-center justify-center h-20 shadow-sm sticky top-0 bg-zinc-50 z-50'>
                <div className='flex items-center justify-between w-11/12'>
                    <div
                        id="buttons"
                        className="flex items-center justify-start rounded-full w-1/3"
                    >
                        <svg
                            ref={menuBtnRef}
                            width="22"
                            height="16"
                            id="menubtn"
                            stroke="#000"
                            className="cursor-pointer z-50"
                        >
                            <path ref={path1} d="M 0 5 L 25 5" />
                            <path ref={path2} d="M 0 13 L 25 13" />
                        </svg>
                        <div ref={menuRef} className={`flex items-center justify-center w-full absolute h-0 overflow-hidden left-0 top-0 bg-zinc-100 shadow-sm ${popp.className}`}>
                            <div className='flex flex-col justify-end h-5/6 w-11/12'>
                                <div className='flex flex-col items-end text-5xl uppercase space-y-2 h-2/3 w-full font-medium'>
                                    <Link href={'/store'}>Store</Link>
                                    <Link href={'/contact'}>Contact</Link>
                                    <Link href={'/signin'}>Sign In</Link>
                                </div>
                                <div>
                                    <h3>INR ₹ | India</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="logo" className='w-1/3 flex justify-center'>
                        <Image src={'/Img/logo-black.svg'} width={100} height={100} alt='' />
                    </div>
                    <div className='flex items-center justify-end w-1/3 space-x-5'>
                        <div>
                            <Image ref={searchIcon} src={'/Img/search2.svg'} width={23} height={23} alt='search' />
                            <div ref={searchBox} className="absolute w-full h-0 overflow-hidden bg-zinc-50 right-0 top-16 flex items-center justify-center">
                                <div className="flex flex-col space-y-2 h-[90%] justify-start w-11/12">
                                    <div className="w-full h-14 border border-stone-400 px-4">
                                        <input type="text" className="w-full h-full bg-transparent outline-none border-none" placeholder="Search" />
                                    </div>
                                    <div>
                                        <p>Your Search results</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
