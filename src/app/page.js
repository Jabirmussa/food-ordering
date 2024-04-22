import Header from "./components/Header";
import Hero from "./components/hero";
import HomeMenu from "./components/HomeMenu";
import SectionHeader from './components/SectionHeader';
import Transition from './transition'
export default function Home() {
  return (
    <>
       <Transition><Hero /></Transition>
       <HomeMenu />
       <section className='text-center my-16'>
        <SectionHeader 
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit.Lorem ipsum dolor sit amet consectetur adipisicing 
              elit.Lorem ipsum dolor sit amet consectetur adipisicing 
              elit.
          </p>
          <p >
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit.Lorem ipsum dolor sit amet consectetur adipisicing 
              elit.Lorem ipsum dolor sit amet consectetur adipisicing 
              elit.
          </p>
          <p >
              Lorem ipsum dolor sit amet consectetur adipisicing 
              elit.Lorem ipsum dolor sit amet consectetur adipisicing 
              elit.
          </p>
        </div>
       </section>
       <section className="text-center my-8">
          <SectionHeader
            subHeader={'Don\'t hesitate'}
            mainHeader={'Contact us'}
          />
          <div className="mt-6">
            <a className="text-4xl underline text-gray-500" href="tel:+258 879896543">
              +258 87 989 6543
            </a>
          </div>
       </section>
    </>
  );
}
