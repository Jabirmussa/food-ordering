'use client';
import { useState, useEffect} from 'react'
import Image from "next/image";
import MenuItem from "./MenuItem";
import SectionHeader from "./SectionHeader";
import Skeleton from './Skeleton';
export default function HomeMenu(){

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 2000);
    }, []);

    return(
        <section className="">
            <div>
                <Image className="absolute left-0" src={'/sallad1.png'} alt={'sallad1'} width={100} height={100} objectFit={'contain'} />
                <Image className="absolute right-0 top-10" src={'/sallad2.png'} alt={'sallad2'} width={100} height={100} objectFit={'contain'} />
            </div>
            <div className="text-center mb-6">
                <SectionHeader 
                subHeader={'check out'}
                mainHeader={'Menu'}
                />
            </div>
            <div className="grid grid-cols-3 gap-4 relative">
              {loading ? <Skeleton /> : <MenuItem />} 
              {loading ? <Skeleton /> : <MenuItem />} 
              {loading ? <Skeleton /> : <MenuItem />} 
              {loading ? <Skeleton /> : <MenuItem />} 
              {loading ? <Skeleton /> : <MenuItem />} 
              {loading ? <Skeleton /> : <MenuItem />} 
            </div>
        </section>
    );
}