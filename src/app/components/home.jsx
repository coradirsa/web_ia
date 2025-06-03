import Button from "./button";

export default function Home() {
    return (
        <section id="home" className="w-full min-h-[100vh] -mt-28 pt-20 px-5
            bg-[url('/img/01.webp')] bg-cover bg-center bg-no-repeat 
            flex justify-start items-center
        ">
            <div className="flex flex-col gap-2 md:gap-5  w-full md:w-1/2">
                <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter uppercase" >Inteligencia artificial que impulsa el éxito</h2>
                <p className="text-white text-xl mb-10 w-96">Desarrikkanis suluciones inteligentes que responden por vos. <br/>
                Inteligencia Artificial eficiente a tu alcance.</p>
                <Button 
                    element="mas información"
                    type="button"
                    className="
                        bg-black/70 rounded-full px-0 py-2 text-white uppercase font-bold w-52  
                        shadow-sm shadow-white/40
                        hover:bg-black/80 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
                        transition-all duration-300
                    "
                />
            </div>
        </section>
    );
}