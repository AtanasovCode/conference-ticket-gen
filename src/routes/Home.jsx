import squigglyLineTop from '../assets/images/pattern-squiggly-line-top.svg';

// Components
import Hero from "../components/Hero";
import Inputs from "../components/Inputs";

const Home = () => {
    return (
        <div className="h-dvh bg-neutral-900 py-12 flex flex-col items-center justify-start text-neutral-0 gap-16">
            <div className="absolute top-[5%] right-0 w-32 md:w-[32%] md:top-[10%]">
                <img src={squigglyLineTop} alt="" className="w-full" />
            </div>
            <Hero />
            <Inputs />
        </div>
    );
}

export default Home;