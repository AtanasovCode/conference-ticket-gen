import logo from '../assets/images/logo-full.svg';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center relative gap-12">
            <div className="absolute top-0 right-0 w-full h-[50%] bg-test"></div>
            <div className="">
                <img src={logo} alt="logo" className="w-full" />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-6">
                <div className="font-extrabold text-3xl text-center">Your Journey to Coding Conf 2025 Starts Here!</div>
                <p className="text-center">Secure your spot at next year’s biggest coding conference.</p>
            </div>
        </div>
    );
}

export default Hero;