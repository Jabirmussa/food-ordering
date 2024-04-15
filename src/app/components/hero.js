import Image from "next/image"; 
import { Suspense } from 'react'
import Right from "./icons/right";
export default function Hero(){
    return(
        <section className="hero mt-8">
            <div className="py-16">
                <h1 className="text-4xl mb-4 font-semibold">Everything<br /> is better<br /> with a&nbsp;
                 <span className="text-primary">Pizza</span>
                </h1>
                <p className="text-gray-500 mb-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Explicabo, dolorem eaque odio Explicabo, dolorem 
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="flex justify-center items-center gap-2 uppercase bg-primary rounded-full px-4 py-2 text-white">
                        Order now
                        <Right />
                    </button>
                    <button className="flex justify-center gap-2 py-2 text-gray-600 font-semibold border-none">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/pizza.png'} alt={'pizza'} 
                layout={'fill'} objectFit={'contain'} />
            </div>
        </section>
    );
}