import squigglyLineTop from '../assets/images/pattern-squiggly-line-top.svg';

// Components
import Hero from "../components/Hero";
import Inputs from "../components/Inputs";

const Home = () => {
    return (
        <div className="min-h-dvh p-4 bg-neutral-900 py-12 flex flex-col items-center justify-start text-neutral-0 gap-16">
            <div className="absolute top-[5%] right-0 w-32 md:w-[32%] md:top-[10%]">
                <img src={squigglyLineTop} alt="" className="w-full" />
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:w-[65%] gap-10">
                <Hero />
                <Inputs />
                <div className="w-full flex items-center justify-center mb-16">
                    <input
                        type="button"
                        value="Generate Ticket"
                        className="w-full rounded-radius-12 text-center bg-orange-500 text-preset-5-extrabold font-extrabold text-neutral-900 p-6"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;