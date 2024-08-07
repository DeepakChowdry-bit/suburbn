import Link from 'next/link'
import React from 'react'

const TopCta = () => {
    return (
        <>
            <div className='flex items-center justify-center bg-zinc-100 h-10 z-50'>
                <Link href={'/store'}>
                    <h4 className='font-normal text-[11px] uppercase md:text-xs tracking-wide hover:border-b'>
                        USE CODE 'URBN10' TODAY! to get 10% OFF
                    </h4>
                </Link>
            </div>
        </>
    )
}

export default TopCta