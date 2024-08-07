import ProductsGrid from "@/Components/ProductsGrid";
import Subscribe from "@/Components/Subscribe";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const popp = Poppins({ 
  subsets: ["latin"],
  weight: ['100','200','800']
 });

export default function Home() {
  return (
    <>
      {/* <div className="flex justify-center h-[75vh] relative">
        <Image src={'/Img/banner.png'} alt="banner" width={1000} height={1000} className="absolute md:w-11/12 h-full object-cover object-center w-fit px-3"/>
        <div className="text-white z-20 h-full flex flex-col items-center justify-center text-center space-y-3">
          <h3 className={`font-bold tracking-wide text-4xl ${popp.className}`}>URB<span className="italic">N</span>. <br /><span className="font-medium text-3xl">COLLECTION</span></h3>
          <Link href={'/store'} className="hover:border-b w-fit">Browse Collection</Link>
        </div>
      </div> */}
      <Subscribe />
      <ProductsGrid />
    </>
  );
}
