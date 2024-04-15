"use client";
import Image from "next/image"; 
import Link from "next/link";

export default function LoginPage(){
    return(
        <div>
             <section className="mt-16">
            <h1 className="text-center text-primary font-semibold text-4xl ">
                Login
            </h1>
            <form className="block max-w-xs mx-auto">
                <input type="email" placeholder="email"  onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="password"   onChange={ev => setPassword(ev.target.value)}/>
                <button type="submit">Login</button>
                <div className="text-gray-500 text-center my-4">
                    or login with google
                </div>
                <button className="flex gap-4 items-center justify-center">
                    <Image src={'/google.png'} alt={'google'} width={24} height={24} />
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing account?
                    <Link className="underline ml-2" href={'/Login'}>Login here &raquo;</Link>
                </div>
            </form>
        </section>
        </div>
    );
}