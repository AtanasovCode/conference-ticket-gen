import squigglyLineTop from '../assets/images/pattern-squiggly-line-top.svg';

// Components
import Hero from "../components/Hero";
import Inputs from "../components/Inputs";

const Home = () => {
    return (
        <div className="min-h-dvh p-4 bg-neutral-900 py-12 flex flex-col items-center justify-start text-neutral-0 gap-16">
            <Hero />
            <div className="flex flex-col items-center justify-center w-full lg:w-[60%] gap-10">
                <Inputs />
                <div className="w-full flex items-center justify-center">
                    <input
                        type="button"
                        value="Generate Ticket"
                        className="w-full rounded-radius-12 text-center bg-orange-500 text-preset-5-extrabold font-extrabold text-neutral-900 p-6"
                    />
                </div>
            </div>

            {/* Decorative Patterns */}
            <div className="absolute top-[5%] right-0 w-32 md:w-[32%] md:top-[10%]">
                <img src={squigglyLineTop} alt="" className="w-full" />
            </div>
        </div>
    );
}

export default Home;