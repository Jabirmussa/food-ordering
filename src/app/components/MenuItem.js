
export default function MenuItem(){
    return(
        <div className="bg-gray-200 rounded-lg p-4 text-center hover:bg-white hover:shadow-2xl transition-all">
            <div className="">
                 <img src="/pizza.png" className="max-w-auto max-h-24 block mx-auto"></img>
            </div>
            <h4 className="font-semibold text-lg my-4">Peperoni Pizza</h4>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing 
                elit.Lorem ipsum dolor sit amet consectetur adipisicing 
            elit.
            </p>
            <button className="mt-4 bg-primary py-2 px-8 rounded-full text-white font-semibold">
                Add to cart $12
            </button>
        </div>
    );
}