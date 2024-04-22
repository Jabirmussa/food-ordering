import Image from "next/image"
export default function profilePage(){
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Profile
            </h1>
            <form className="max-w-md mx-auto">
                <div className="flex gap-2">
                    <div className="relative">
                        <Image className="rounded-full cursor-pointer mb-2" src={'/eu.png'} width={250} height={250} alt="avatar" />
                        <button type="button">Edit</button>
                    </div>
                    <div className="grow">
                        <input type="text" placeholder="First and Last Name"/>
                        <input disabled={true} type="email" placeholder="test@example.com"/>
                        <input type="text" placeholder="Street adress"/>
                        <div className="flex gap-4">
                            <input type="text" placeholder="Postal  Code"/>
                            <input type="text" placeholder="City"/>
                        </div>
                        <input type="text" placeholder="Country"/>
                        <button type="submit">Save</button>
                    </div>
                </div>
            </form>
        </section>
    )
}