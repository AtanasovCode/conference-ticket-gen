

// Components
import Hero from "../components/Hero";
import Inputs from "../components/Inputs";

const Home = () => {
    return (
        <div className="h-dvh bg-neutral-900 py-12 flex flex-col items-center justify-start text-neutral-0 gap-16">
            <Hero />
            <Inputs />
        </div>
    );
}

export default Home;