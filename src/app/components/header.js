'use client';
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header(){
    const session = useSession();
    console.log(session);
    const status = session?.status;
    const userData = session.data?.user;
    let userName = userData?.name || userData?.email;
    if (userName && userName.includes(' ')) {
      userName = userName.split(' ')[0];
    }
    return (
        <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href={'/'}>
        ST PIZZA
        </Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
            {status == 'authenticated' &&(
                <Link className="bg-primary text-white rounded-full px-8 py-2" href={'register'}>
                Logout
             </Link>
            )}
            {status !== 'authenticated' && (
                <>
                <Link href={'/login'}> Login</Link>
                <Link className="bg-primary text-white rounded-full px-8 py-2" href={'register'}>
                    Register
                </Link>
                </>
            )}
        </nav>
        </header>
    );
}