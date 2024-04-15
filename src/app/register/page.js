"use client";
import Image from "next/image"; 
import Link from "next/link";
import { useState } from "react";

export default function Registerpage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    async function handleFormSubmit(ev) {
      ev.preventDefault();
      setCreatingUser(true);
      setError(false);
      setUserCreated(false);
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        setUserCreated(true);
      }
      else {
        setError(true);
      }
      setCreatingUser(false);
    }

    return(
        <section className="mt-16">
            <h1 className="text-center text-primary font-semibold text-4xl ">
                Register
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email} onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="password"  value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button type="submit">Register</button>
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
    );
}