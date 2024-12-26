import logo from '../assets/images/logo-full.svg';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center relative gap-12 w-full">
            <div className="">
                <img src={logo} alt="logo" className="w-full" />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-6 text-center">
                <div className="text-preset-1-mobile text-neutral-0 font-extrabold md:text-preset-1">
                    <span className="lg:block">Your Journey to Coding Conf</span> <span className="lg:block">2025 Starts Here!</span>
                </div>
                <p className="text-preset-4-mobile text-neutral-300 font-medium md:text-preset-4">
                    Secure your spot at next year’s biggest coding conference.
                </p>
            </div>
        </div>
    );
}

export default Hero;